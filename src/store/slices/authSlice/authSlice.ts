import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

import { AuthState } from './authSlice.types'

import { signInThunk, registrationThunk, logOutThunk, resetPasswordThunk, updateUserThunk } from './authThunk'

const initialState: AuthState = {
   user: null,
   error: ''
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      addUser: (state, { payload }: PayloadAction<User>): void => {
         state.user = payload
      },
      removeUser: (state): void => {
         state.user = null
      }
   },
   extraReducers: (builder): void => {
      builder
         .addCase(signInThunk.fulfilled, (state, { payload }): void => {
            if (payload) { 
               state.user = payload
               state.error = ''
            }
         })
         .addCase(signInThunk.rejected, (state, { payload }): void => {
            if (payload) {
               state.error = payload
            }
         })
         .addCase(registrationThunk.fulfilled, (state, { payload }): void => {
            if (payload) {
               state.user = payload
               state.error = ''
            }
         })
         .addCase(registrationThunk.rejected, (state, { payload }): void => {
            if (payload) {
               state.error = payload
            }
         })
         .addCase(logOutThunk.fulfilled, (state): void => {
            state.user = null 
            state.error = ''
         })
         .addCase(logOutThunk.rejected, (state, { payload }): void => {
            if (payload) {
               state.error = payload
            }
         })
         .addCase(resetPasswordThunk.fulfilled, (state): void => {
            state.user = null
            state.error = ''
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
