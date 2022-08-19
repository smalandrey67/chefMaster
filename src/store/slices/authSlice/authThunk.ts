import { createAsyncThunk } from '@reduxjs/toolkit'

import { sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile, User } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { AuthorisationDataType, UserType } from './authSlice.types'
import { auth } from '../../../firebase'
import { LogOutType } from './authSlice.types'

import { useToast } from 'hooks/useToast'

export const signInThunk = createAsyncThunk<UserType, AuthorisationDataType, { rejectValue: string }>(
   'signIn', async ({ email, password, navigateHandler }, { rejectWithValue, fulfillWithValue }) => {
      try {
         const { user } = await signInWithEmailAndPassword(auth, email, password)

         const userData: UserType = {
            photoURL: user.photoURL,
            email: user.email,
            name: user.displayName
         }

         fulfillWithValue(navigateHandler('/meal/plan'))

         return userData
      } catch (error) {
         return rejectWithValue('invalid password')
      }
   }
)

export const registrationThunk = createAsyncThunk<UserType, AuthorisationDataType, { rejectValue: string }>(
   'registration', async ({ email, password, navigateHandler }, { rejectWithValue, fulfillWithValue }) => {
      try {
         const { user } = await createUserWithEmailAndPassword(auth, email, password)

         const userData: UserType = {
            photoURL: user.photoURL,
            email: user.email,
            name: user.displayName
         }

         fulfillWithValue(navigateHandler('/meal/plan'))

         return userData
      } catch (error) {
         return rejectWithValue('email already exists')
      }
   }
)

export const logOutThunk = createAsyncThunk<void, LogOutType, { rejectValue: string }>(
   'logOut', async ({ navigateHandler }, { rejectWithValue, fulfillWithValue }) => {
      try {
         await signOut(auth)

         fulfillWithValue(navigateHandler('/'))
      } catch (error) {
         return rejectWithValue('server error')
      }
   }
)

export const resetPasswordThunk = createAsyncThunk<void, { email: string }, { rejectValue: string }>(
   'resetPassword', async ({ email }, { rejectWithValue, fulfillWithValue }) => {
      try {

         await sendPasswordResetEmail(auth, email)

         fulfillWithValue(
            useToast()('Check out your email', 'success')
         )
      } catch (error) {
         return rejectWithValue('Can\'nt reset a password')
      }
   }
)

export const updateUserThunk = createAsyncThunk<void, { profilePhotoUrl: string | undefined, name: string | undefined }, { rejectValue: string }>(
   'updateProfile', async ({ profilePhotoUrl, name }, { rejectWithValue, fulfillWithValue }) => {
      try {
         if (auth.currentUser) {
            await updateProfile(auth.currentUser, { photoURL: profilePhotoUrl, displayName: name })
         }

         fulfillWithValue(
            useToast()('The profile was updated', 'success')
         )
      } catch (error) {
         return rejectWithValue('Can\'nt reset a password')
      }
   }
)




