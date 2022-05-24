import axios from 'axios'
import { instance } from '../../api' 

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getQuickAnswer } from '../../config'

import { AnswerType } from '../../types/Answer'

export const quickAnswerAsync = createAsyncThunk<AnswerType, string, { rejectValue: string }>(
   'quickAnswer/quickAnswerAsync',

   async (question, { rejectWithValue }): Promise<AnswerType | any> => {
      try {

         if (localStorage.getItem('answer')) {
            return JSON.parse(localStorage.getItem('answer') || '')
         }

         const response = await instance.get<AnswerType>(getQuickAnswer(question))

         localStorage.setItem('answer', JSON.stringify(response.data))

         return response.data
      } catch (e) {
         if (axios.isAxiosError(e)) {
            return rejectWithValue(e.message)
         }

         return rejectWithValue('Could not find an answer to your question. Server error')
      }
   }
)