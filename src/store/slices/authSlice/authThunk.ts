import { createAsyncThunk } from '@reduxjs/toolkit'

import { sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile, User } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { AuthorisationDataType } from './authSlice.types'
import { auth } from '../../../firebase'
import { LogOutType } from './authSlice.types'
import { UploadImageType } from 'types/UploadImage'

export const signInThunk = createAsyncThunk<User, AuthorisationDataType, { rejectValue: string }>(
   'signIn', async ({ email, password, navigateHandler }, { rejectWithValue, fulfillWithValue }) => {
      try {
         const { user } = await signInWithEmailAndPassword(auth, email, password)

         fulfillWithValue(navigateHandler('/meal/plan'))

         return user
      } catch (error) {
         return rejectWithValue('invalid password')
      }
   }
)

export const registrationThunk = createAsyncThunk<User, AuthorisationDataType, { rejectValue: string }>(
   'registration', async ({ email, password, navigateHandler }, { rejectWithValue, fulfillWithValue }) => {
      try {
         const { user } = await createUserWithEmailAndPassword(auth, email, password)

         fulfillWithValue(navigateHandler('/meal/plan'))

         return user
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

         // fulfillWithValue(navigateHandler('/'))
      } catch (error) {
         return rejectWithValue('Can\'nt reset a password')
      }
   }
)

export const updateUserThunk = createAsyncThunk<void, { profilePhotoUrl: string }, { rejectValue: string }>(
   'updateProfile', async ({ profilePhotoUrl }, { rejectWithValue }) => {
      try {
         if (auth.currentUser) {
            await updateProfile(auth.currentUser, { photoURL: profilePhotoUrl })
         }
      } catch (error) {
         return rejectWithValue('Can\'nt reset a password')
      }
   }
)




