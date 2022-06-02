import { createSlice } from '@reduxjs/toolkit'
import { uploadImageAsync } from '../requests/uploadImageAsync'

import { UploadImageType } from '../../types/UploadImage'
import { StatusEnum } from '../../types/Status'

type searhedState = {
   url: UploadImageType | null
   status: StatusEnum
   error: string
}

const initialState: searhedState = {
   url: null,
   status: StatusEnum.IDKE,
   error: '',
}


const uploadImageSlice = createSlice({
   name: 'uploadImage',
   initialState,
   reducers: {
      resetUrl: (state): void => {
         state.url = null
         state.status = StatusEnum.IDKE
      },
   },


   extraReducers: (builder): void => {
      builder
         .addCase(uploadImageAsync.pending, (state): void => {
            state.status = StatusEnum.PENDING
         })
         .addCase(uploadImageAsync.fulfilled, (state, action): void => {
            state.status = StatusEnum.FULFILLED
            state.url = action.payload
         })
         .addCase(uploadImageAsync.rejected, (state, action): void => {
            state.status = StatusEnum.REJECTED
            state.error = action.payload as string
         })
   }
})

export const { resetUrl } = uploadImageSlice.actions
export default uploadImageSlice.reducer


