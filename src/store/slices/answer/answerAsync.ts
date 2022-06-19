import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../../api/instance'
import { getAnswer } from '../../../api/config'

import { AnswerType } from '../../../@types/Answer'

export const answerAsync = createAsyncThunk<AnswerType, string, { rejectValue: string }>(
   'quickAnswer/quickAnswerAsync',

   async (question, { rejectWithValue }) => {
      try {
         const response = await instance.get<AnswerType>(getAnswer(question))

         return response.data
      }catch (e) {
         if (axios.isAxiosError(e)) {
            return rejectWithValue(e.message)
         }
         return rejectWithValue('Could not find an answer to your question. Server error')
      }
   }
)