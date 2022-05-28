import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { getBlogs } from '../../config'

import { BlogType, BlogResponse } from '../../types/Blogs'

export const uploadBlogAsync = createAsyncThunk<BlogResponse, BlogType, { rejectValue: string }>(
   'uploadBlog/uploadBlogAsync',

   async (data, { rejectWithValue }): Promise<BlogResponse | any> => {

      try {
         const response = await axios.post<BlogResponse>(getBlogs(), data)
      } catch (e) {
         if (axios.isAxiosError(e)) {
            return rejectWithValue(e.message)
         }

         return rejectWithValue('Can\'t find this product. Server error')
      }
   }
)