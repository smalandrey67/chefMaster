import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { uploadImage } from '../../config'

import { UploadImageType } from '../../types/UploadImage'

export const uploadImageAsync = createAsyncThunk<UploadImageType, FormData, { rejectValue: string }>(
   'uploadImage/uploadImageAsync',

   async (data, { rejectWithValue }): Promise<UploadImageType | any> => {

      try {
         const response = await axios.post<UploadImageType>(uploadImage(), data)

         return response.data.secure_url
      } catch (e) {
         if (axios.isAxiosError(e)) {
            return rejectWithValue(e.message)
         }

         return rejectWithValue('Can\'t find this product. Server error')
      }
   }
)