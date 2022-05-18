import { createAsyncThunk } from '@reduxjs/toolkit'
import { getQuickAnswer } from '../../config'

import { IAnswer } from '../../models/IAnswer'

export const quickAnswerAsync = createAsyncThunk<IAnswer, string, { rejectValue: string }>(
   'quickAnswer/quickAnswerAsync',

   async (question, { rejectWithValue }) => {
      
      // temporary we add to local storage. We have few pointes for requests
      if (localStorage.getItem('answer')) {
         return JSON.parse(localStorage.getItem('answer') || '')
      }


      const response = await fetch(getQuickAnswer(question))

      if (!response.ok) {
         return rejectWithValue('could not find an answer to your question. Server error.')
      }

      const data = await response.json()

   
      // //temporary we add to local storage. We have few pointes for requests
      localStorage.setItem('answer', JSON.stringify(data))

      return (await data) as IAnswer

   }
)