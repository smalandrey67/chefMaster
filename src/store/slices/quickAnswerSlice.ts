import { createSlice } from '@reduxjs/toolkit'
import { quickAnswerAsync } from '../requests/quickAnswerAsync'

import { AnswerResponseType } from '../../types/Answer'
import { StatusEnum } from '../../types/Status'

type AnswerState = {
   answer: AnswerResponseType | null,
   status: StatusEnum,
   error: string
}

const initialState: AnswerState = {
   answer: null,
   status: StatusEnum.IDKE,
   error: '',
}

const quickAnswerSlice = createSlice({
   name: 'quickAnswer',
   initialState,
   reducers: {
      
      // #when popop will be closed we reset the state
      resetAnswer: (state) => {
         state.answer = null
         state.status = StatusEnum.IDKE
      }
   },

   extraReducers: (builder): void => {
      builder
         .addCase(quickAnswerAsync.pending, (state): void => {
            state.status = StatusEnum.PENDING
         })
         .addCase(quickAnswerAsync.fulfilled, (state, action): void => {
            state.status = StatusEnum.FULFILLED
            state.answer = action.payload
         })
         .addCase(quickAnswerAsync.rejected, (state, action): void => {
            state.status = StatusEnum.REJECTED
            state.error = action.payload as string
         })
   }
})

export const { resetAnswer } = quickAnswerSlice.actions
export default quickAnswerSlice.reducer


