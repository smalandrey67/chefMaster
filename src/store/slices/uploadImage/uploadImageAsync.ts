import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { uploadImage } from '../../../api/config'

import { UploadImageType } from '../../../@types/UploadImage'

export const uploadImageAsync = createAsyncThunk<UploadImageType, FormData, { rejectValue: string }>(
   'uploadImage/uploadImageAsync',

   async (data, { rejectWithValue }) => {
      try {
         const response = await axios.post<UploadImageType>(uploadImage(), data)

         return response.data.secure_url as unknown as UploadImageType
      } catch (e) {
         if (axios.isAxiosError(e)) {
            return rejectWithValue(e.message)
         }

         return rejectWithValue('Can\'t upload image. Server error')
      }
   }
)