import { createSlice } from '@reduxjs/toolkit'
import { uploadBlogA } from './uploadBlogA'

type searhedState = {
   errorUploadBlog: string
}

const initialState: searhedState = {
   errorUploadBlog: '',
}

const uploadBlogS = createSlice({
   name: 'uploadBlog',
   initialState,
   reducers: {},


   extraReducers: (builder): void => {
      builder
         .addCase(uploadBlogA.rejected, (state, action): void => {
            state.errorUploadBlog = action.payload as string
         })
   }
})

export default uploadBlogS.reducer


