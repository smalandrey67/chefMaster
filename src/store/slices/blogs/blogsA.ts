import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { getBlogs } from '../../../api/config'
import { BlogsType } from '../../../@types/Blogs'

export const blogsA = createAsyncThunk<BlogsType[], void, { rejectValue: string }>(
   'blogs/blogsA',

   async (_, { rejectWithValue }) => {
      try {
         const response = await axios.get<BlogsType[]>(getBlogs())

         return response.data as BlogsType[]
      } catch (e) {
         if (axios.isAxiosError(e)) {
            return rejectWithValue(e.message)
         }

         return rejectWithValue('Can\'t download this cuisine. Server error')
      }
   }
)