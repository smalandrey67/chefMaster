import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

import { AuthState, UserType } from './authSlice.types'

import { signInThunk, registrationThunk, logOutThunk, resetPasswordThunk, updateUserThunk } from './authThunk'

const initialState: AuthState = {
   user: null,
   error: null
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      addUser: {
         reducer: (state, { payload }: PayloadAction<UserType>): void => {
            state.user = payload
         },
         prepare: (currentUser: User) => {
            return {
               payload: {
                  photoURL: currentUser.photoURL, 
                  email: currentUser.email,
                  name: currentUser.displayName
               }
            }
         }
      },
      removeUser: (state): void => {
         state.user = null
      }
   },
   extraReducers: (builder): void => {
      builder
         .addCase(signInThunk.fulfilled, (state, { payload }: PayloadAction<UserType>): void => {
            state.user = payload
            state.error = null
         })
         .addCase(signInThunk.rejected, (state, { payload }): void => {
            if (payload) {
               state.error = payload
            }
         })
         .addCase(registrationThunk.fulfilled, (state, { payload }): void => {
            state.user = payload
            state.error = null
         })
         .addCase(registrationThunk.rejected, (state, { payload }): void => {
            if (payload) {
               state.error = payload
            }
         })
         .addCase(logOutThunk.fulfilled, (state): void => {
            state.user = null 
            state.error = null
         })
         .addCase(logOutThunk.rejected, (state, { payload }): void => {
            if (payload) {
               state.error = payload
            }
         })
         .addCase(resetPasswordThunk.fulfilled, (state): void => {
            state.user = null
            state.error = null
         })
         .addCase(resetPasswordThunk.rejected, (state, { payload }): void => {
            if (payload) {
               state.error = payload
            }
         })
         .addCase(updateUserThunk.rejected, (state, { payload }): void => {
            if (payload) {
               state.error = payload
            }
         })  
   }
})

export const { addUser, removeUser } = authSlice.actions
export default authSlice.reducer
