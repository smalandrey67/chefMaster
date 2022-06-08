import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { uploadImage } from '../../../api/config'

import { UploadImageType } from '../../../models/UploadImage'

export const uploadImageA = createAsyncThunk<UploadImageType, FormData, { rejectValue: string }>(
   'uploadImage/uploadImageA',

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