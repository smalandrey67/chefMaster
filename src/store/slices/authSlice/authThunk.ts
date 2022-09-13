import { createAsyncThunk } from '@reduxjs/toolkit'

import { sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase'

import { AuthorisationParametersType, UserType } from './authSlice.types'
import { auth } from '../../../firebase'
import { LogOutType, UpdateUserThunkParametersType } from './authSlice.types'

import { handlerError } from 'utils/helpers/handleError.helper'
import { handleAlert } from 'utils/helpers/handleAlert.helper'
import { addUser } from './authSlice'

import { mealPlan } from 'utils/constants/mealPlan.constants'

export const signInThunk = createAsyncThunk<UserType, AuthorisationParametersType, { rejectValue: string }>(
   'signIn', async ({ email, password, navigateHandler }, { rejectWithValue, fulfillWithValue }) => {
      try {
         const { user } = await signInWithEmailAndPassword(auth, email, password)

         const userData: UserType = {
            photoURL: user.photoURL,
            email: user.email,
            name: user.displayName,
            uid: user.uid
         }

         fulfillWithValue(navigateHandler('/'))

         return userData
      } catch (error) {
         return rejectWithValue(handlerError(error, 'Server Error'))
      }
   }
)

export const registrationThunk = createAsyncThunk<UserType, AuthorisationParametersType, { rejectValue: string }>(
   'registration', async ({ email, password, navigateHandler }, { rejectWithValue, fulfillWithValue }) => {
      try {
         const { user } = await createUserWithEmailAndPassword(auth, email, password)

         const userDocumentRef = doc(db, 'users', user.uid)
         await setDoc(userDocumentRef, { mealPlan }) 

         const userData: UserType = {
            photoURL: user.photoURL,
            email: user.email,
            name: user.displayName,
            uid: user.uid
         }

         fulfillWithValue(navigateHandler('/'))
         return userData
      } catch (error) {
         return rejectWithValue(handlerError(error, 'Server Error'))
      }
   }
)

export const logOutThunk = createAsyncThunk<void, LogOutType, { rejectValue: string }>(
   'logOut', async ({ navigateHandler }, { rejectWithValue, fulfillWithValue }) => {
      try {
         await signOut(auth)

         fulfillWithValue(navigateHandler('/'))
      } catch (error) {
         return rejectWithValue(handlerError(error, 'Server Error'))
      }
   }
)

export const resetPasswordThunk = createAsyncThunk<void, { email: string }, { rejectValue: string }>(
   'resetPassword', async ({ email }, { rejectWithValue, fulfillWithValue }) => {
      try {
         await sendPasswordResetEmail(auth, email)

         fulfillWithValue(
            handleAlert()('Check out your email', 'success')
         )
      } catch (error) {
         return rejectWithValue(handlerError(error, 'Server Error'))
      }
   }
)

export const updateUserThunk = createAsyncThunk<void, UpdateUserThunkParametersType, { rejectValue: string }>(
   'updateProfile', async (updatesData, { rejectWithValue, fulfillWithValue, dispatch }) => {
      try {
         if (auth.currentUser) {
            await updateProfile(auth.currentUser, { ...updatesData })
            dispatch(addUser(auth.currentUser))

            fulfillWithValue(
               handleAlert()('The profile was updated', 'success')
            )
         }
      } catch (error) {
         return rejectWithValue(handlerError(error, 'Server Error'))
      }
   }
)