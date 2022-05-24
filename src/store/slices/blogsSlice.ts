import { createSlice } from '@reduxjs/toolkit'
import { blogsAsync } from '../requests/blogsAsync'

import { BlogsType } from '../../types/Blogs'
import { StatusEnum } from '../../types/Status'

type RecipeState = {
   blogs: BlogsType[];
   status: StatusEnum,
   error: string,
}

const initialState: RecipeState = {
   blogs: [],
   status: StatusEnum.IDKE,
   error: '',
}

const blogsSlice = createSlice({
   name: 'blogs',
   initialState,
   reducers: {},

   extraReducers: (builder): void => {
      builder
         .addCase(blogsAsync.pending, (state): void => {
            state.status = StatusEnum.PENDING
         })
         .addCase(blogsAsync.fulfilled, (state, action): void => {
            state.status = StatusEnum.FULFILLED
            state.blogs = action.payload
         })
         .addCase(blogsAsync.rejected, (state, action): void => {
            state.status = StatusEnum.REJECTED
            state.error = action.payload as string
         })
   }
})

export default blogsSlice.reducer


