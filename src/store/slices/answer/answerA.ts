import axios from 'axios'
import { instance } from '../../../api/instance' 

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAnswer } from '../../../api/config'

import { AnswerResponseType } from '../../../models/Answer'

export const answerA = createAsyncThunk<AnswerResponseType, string, { rejectValue: string }>(
   'quickAnswer/quickAnswerAsync',

   async (question, { rejectWithValue }): Promise<AnswerResponseType | any> => {
      try {
         const response = await instance.get<AnswerResponseType>(getAnswer(question))

         return response.data as AnswerResponseType
      } catch (e) {
         if (axios.isAxiosError(e)) {
            return rejectWithValue(e.message)
         }

         return rejectWithValue('Could not find an answer to your question. Server error')
      }
   }
)