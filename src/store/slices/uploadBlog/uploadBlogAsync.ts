import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { getBlogs } from '../../../api/config'

import { PostType, UploadBlogType } from '../../../@types/Blogs'

type UploadType = {
   post: PostType;
   navigateHandler: () => void;
}

export const uploadBlogAsync = createAsyncThunk<void, UploadType, { rejectValue: string }>(
   'uploadBlog/uploadBlogAsync',
   
   async (data, { rejectWithValue, fulfillWithValue }) => {
      try {
         await axios.post<UploadBlogType>(getBlogs(), data.post)

         // #redirect after fulfilled post request
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