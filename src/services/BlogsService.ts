import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { BlogsResultTypeType, PreparedPostType } from 'types/Blogs'
import { config } from 'config/config'

export const blogsApi = createApi({
   reducerPath: 'blogsService',
   tagTypes: ['Blogs'],
   baseQuery: fetchBaseQuery({ baseUrl: config.mockapi }),

   endpoints: (builder) => ({
      getBlogs: builder.query<BlogsResultTypeType[], void>({
         query: () => ({
            url: '/items'
         }),
         transformResponse: (response: BlogsResultTypeType[]): BlogsResultTypeType[] => response.slice().sort((a, b) => Number(b.id) - Number(a.id)),
         providesTags: ['Blogs']
      }),
      uploadBlog: builder.mutation<BlogsResultTypeType, PreparedPostType>({
         query: (post) => ({
            url: '/items',
            method: 'POST',
            body: post
         }),
         invalidatesTags: ['Blogs']
      })
   })
})

export const { useGetBlogsQuery, useUploadBlogMutation } = blogsApi