import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { getBlogs } from '../../../api/config'

import { BlogType, BlogResponse } from '../../../models/Blogs'

export const uploadBlogA = createAsyncThunk<BlogResponse, BlogType, { rejectValue: string }>(
   'uploadBlog/uploadBlogA',
   
    //@ts-ignore
   async (data, { rejectWithValue }) => {
      try {
         await axios.post<BlogResponse>(getBlogs(), data)
         
      } catch (e) {
         if (axios.isAxiosError(e)) {
            return rejectWithValue(e.message)
         }

         return rejectWithValue('Can\'t upload your post. Server error')
      }
   }
)