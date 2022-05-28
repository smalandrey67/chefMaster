import { createSlice } from '@reduxjs/toolkit'
import { uploadBlogAsync } from '../requests/uploadBlogAsync'

type searhedState = {
   errorUploadBlog: string
}

const initialState: searhedState = {
   errorUploadBlog: '',
}

const uploadBlogSlice = createSlice({
   name: 'uploadBlog',
   initialState,
   reducers: {},


   extraReducers: (builder): void => {
      builder
         .addCase(uploadBlogAsync.rejected, (state, action): void => {
            state.errorUploadBlog = action.payload as string
         })
   }
})

export default uploadBlogSlice.reducer


