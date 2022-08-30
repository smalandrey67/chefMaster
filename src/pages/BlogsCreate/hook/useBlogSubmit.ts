import { Dispatch, SetStateAction, useEffect } from 'react'
import { SubmitHandler, UseFormReset } from 'react-hook-form'

import { PreparedPostType, SubmitBlogType } from 'types/Blogs'
import { UseBlogSubmitReturnsType } from 'types/Hooks'

import { useUploadBlogMutation } from 'services/BlogsService'

import { useAppSelector } from 'hooks/useRedux'
import { useRedirect } from 'hooks/useRedirect'
import { selectCurrentUser } from 'store/slices/authSlice/authSlice.selectors'

import { config } from 'config'

export const useBlogSubmit = (
   userPhoto: string | undefined,
   setFileName: Dispatch<SetStateAction<string>>,
   reset: UseFormReset<SubmitBlogType>
): UseBlogSubmitReturnsType => {

   const [uploadBlog, { error: errorBlog, isSuccess }] = useUploadBlogMutation()

   const user = useAppSelector(selectCurrentUser)
   const navigateHandler = useRedirect()

   useEffect(() => {
      if (isSuccess) {
         navigateHandler('/blogs')
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isSuccess])

   const submitBlogHandler: SubmitHandler<SubmitBlogType> = (data): void => {
      if (userPhoto) {
         const postData: PreparedPostType = {
            ...data,
            file: userPhoto,
            author: user?.name ? user?.name : 'Anonymous',
            avatar: user?.photoURL ? user?.photoURL : config.noUserPhoto
         }

         uploadBlog(postData)
         setFileName('')
         reset()
      }
   }

   return { errorBlog, submitBlogHandler }
}