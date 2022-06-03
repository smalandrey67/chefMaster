import { createSlice } from '@reduxjs/toolkit'
import { blogsA } from './blogsA'

import { BlogsType } from '../../../models/Blogs'
import { StatusEnum } from '../../../models/Status'

type BlogState = {
   blogs: BlogsType[];
   status: StatusEnum,
   error: string,
}

const initialState: BlogState = {
   blogs: [],
   status: StatusEnum.IDKE,
   error: '',
}

const blogsS = createSlice({
   name: 'blogs',
   initialState,
   reducers: {},

   extraReducers: (builder): void => {
      builder
         .addCase(blogsA.pending, (state): void => {
            state.status = StatusEnum.PENDING
         })
         .addCase(blogsA.fulfilled, (state, action): void => {
            state.status = StatusEnum.FULFILLED
            state.blogs = action.payload
         })
         .addCase(blogsA.rejected, (state, action): void => {
            state.status = StatusEnum.REJECTED
            state.error = action.payload as string
         })
   }
})

export default blogsS.reducer


