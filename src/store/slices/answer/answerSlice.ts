import { createSlice } from '@reduxjs/toolkit'
import { answerAsync } from './answerAsync'

import { AnswerResponseType } from '../../../@types/Answer'
import { StatusEnum } from '../../../@types/Status'

type AnswerState = {
   answer: AnswerResponseType | null;
   status: StatusEnum;
   error: string;
}

const initialState: AnswerState = {
   answer: {} as AnswerResponseType,
   status: StatusEnum.IDKE,
   error: '',
}

const answerSlice = createSlice({
   name: 'quickAnswer',
   initialState,
   reducers: {

      // #when popup will be closed we reset the state
      resetAnswer: (state) => {
         state.answer = null
         state.status = StatusEnum.IDKE
      }
   },

   extraReducers: (builder): void => {
      builder
         .addCase(answerAsync.pending, (state): void => {
            state.status = StatusEnum.PENDING
         })
         .addCase(answerAsync.fulfilled, (state, action): void => {
            state.status = StatusEnum.FULFILLED
            state.answer = action.payload
         })
         .addCase(answerAsync.rejected, (state, action): void => {
            state.status = StatusEnum.REJECTED
            state.error = action.payload as string
         })
   }
})

export const { resetAnswer } = answerSlice.actions
export default answerSlice.reducer


