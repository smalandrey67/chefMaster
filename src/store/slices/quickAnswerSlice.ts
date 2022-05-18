import { createSlice } from '@reduxjs/toolkit'
import { quickAnswerAsync } from '../requests/quickAnswerAsync'

import { IAnswer } from '../../models/IAnswer'

type AnswerState = {
   answer: IAnswer | null,
   status: string | null,
   error: string | null,
}

const initialState: AnswerState = {
   answer: null,
   status: null,
   error: null,
}

const quickAnswerSlice = createSlice({
   name: 'quickAnswer',
   initialState,
   reducers: {
      
      // #when popop will be closed we reset the state
      resetAnswer: (state) => {
         state.answer = null
         state.status = null
      }
   },

   extraReducers: (builder): void => {
      builder
         .addCase(quickAnswerAsync.pending, (state): void => {
            state.status = 'pending'
            state.error = null
         })
         .addCase(quickAnswerAsync.fulfilled, (state, action): void => {
            state.status = 'fulfilled'
            state.answer = action.payload
         })
         .addCase(quickAnswerAsync.rejected, (state, action): void => {
            state.status = 'rejected'

            if (action.payload) {
               state.error = action.payload
            }
         })
   }
})

const { actions, reducer } = quickAnswerSlice

export const { resetAnswer } = actions
export default reducer


