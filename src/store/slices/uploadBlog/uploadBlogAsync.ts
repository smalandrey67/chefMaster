import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { getBlogs } from '../../../api/config'

import { BlogType, BlogResponse } from '../../../@types/Blogs'

type UploadType = {
   post: BlogType;
   navigateHandler: () => void;
}

export const uploadBlogAsync = createAsyncThunk<BlogResponse, UploadType, { rejectValue: string }>(
   'uploadBlog/uploadBlogAsync',
   
    //@ts-ignore
   async (data, { rejectWithValue, fulfillWithValue }) => {
      try {
         await axios.post<BlogResponse>(getBlogs(), data.post)

         // @redirect after fulfilled post request
         fulfillWithValue(
            data.navigateHandler()
         )
         
      } catch (e) {
         if (axios.isAxiosError(e)) {
            return rejectWithValue(e.message)
         }

         return rejectWithValue('Can\'t upload your post. Server error')
      }
   }
)