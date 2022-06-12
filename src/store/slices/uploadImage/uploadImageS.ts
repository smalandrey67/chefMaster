import { createSlice } from '@reduxjs/toolkit'
import { uploadImageA } from './uploadImageA'

import { UploadImageType } from '../../../@types/UploadImage'
import { StatusEnum } from '../../../@types/Status'

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


const uploadImageS = createSlice({
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
         .addCase(uploadImageA.pending, (state): void => {
            state.status = StatusEnum.PENDING
         })
         .addCase(uploadImageA.fulfilled, (state, action): void => {
            state.status = StatusEnum.FULFILLED
            state.url = action.payload
         })
         .addCase(uploadImageA.rejected, (state, action): void => {
            state.status = StatusEnum.REJECTED
            state.error = action.payload as string
         })
   }
})

export const { resetUrl } = uploadImageS.actions
export default uploadImageS.reducer


