import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { getBlogs } from '../../config'
import { BlogsType } from '../../types/Blogs'

export const blogsAsync = createAsyncThunk<BlogsType[], void, { rejectValue: string }>(
   'blogs/blogsAsync',

   async (_, { rejectWithValue }): Promise<BlogsType[] | any> => {
      try {

         const response = await axios.get<BlogsType[]>(getBlogs())

         return response.data

      } catch (e) {
         if (axios.isAxiosError(e)) {
            return rejectWithValue(e.message)
         }

         return rejectWithValue('Can\'t download this cuisine. Server error')
      }
   }
)