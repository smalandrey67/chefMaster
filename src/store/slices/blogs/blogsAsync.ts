import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { getBlogs } from '../../../api/config'
import { BlogsType } from '../../../@types/Blogs'

export const blogsAsync = createAsyncThunk<BlogsType[], void, { rejectValue: string }>(
   'blogs/blogsAsync',

   async (_, { rejectWithValue }) => {
      try {
         const response = await axios.get<BlogsType[]>(getBlogs())

         return response.data
      } catch (e) {
         if (axios.isAxiosError(e)) {
            return rejectWithValue(e.message)
         }

         return rejectWithValue('Could not download any of those blogs. Server error')
      }
   }
)