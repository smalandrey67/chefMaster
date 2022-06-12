import { createSlice } from '@reduxjs/toolkit'
import { answerA } from './answerA'

import { AnswerResponseType } from '../../../@types/Answer'
import { StatusEnum } from '../../../@types/Status'

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

const answerS = createSlice({
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
         .addCase(answerA.pending, (state): void => {
            state.status = StatusEnum.PENDING
         })
         .addCase(answerA.fulfilled, (state, action): void => {
            state.status = StatusEnum.FULFILLED
            state.answer = action.payload
         })
         .addCase(answerA.rejected, (state, action): void => {
            state.status = StatusEnum.REJECTED
            state.error = action.payload as string
         })
   }
})


export const { resetAnswer } = answerS.actions
export default answerS.reducer


