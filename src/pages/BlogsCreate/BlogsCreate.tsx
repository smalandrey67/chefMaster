import { FC, ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { resetUrl } from '../../store/slices/uploadImageSlice'
import { uploadImageAsync } from '../../store/requests/uploadImageAsync'
import { uploadBlogAsync } from '../../store/requests/uploadBlogAsync'

import { Container, SpinnerWrapper, SpecialTitle, ErrorMessage } from '../../styled/Reused.styled'
import {
   BlogsCreateEl,
   BlogsCreateBody,
   BlogsCreateTitle,
   BlogsCreateForm,
   BlogsCreateLabel,
   BlogsCreateInput,
   BlogsCreateLabelFile,
   BlogsCreateInputFile,
   BlogsCreateTextarea,
   BlogsCreateButton,
   BlogsCreatePreview,
   BlogsCreatePreviewImage,
   BlogsCreateFieldWrapper,
   BlogsCreateLabelWrapper,
} from './BlogsCreate.styled'

import { StatusEnum } from '../../types/Status'
import { BlogType, DataType } from '../../types/Blogs'

import { Spinner } from '../../components/Spinner/Spinner'
import { BiError } from 'react-icons/bi'


export const BlogsCreate: FC = () => {
   const [fileName, setFileName] = useState<string>('')

   const dispatch = useAppDispatch()
   const { url, status, error } = useAppSelector(state => state.uploadImageReducer)
   const { errorUploadBlog } = useAppSelector(state => state.uploadBlogReducer)

   const navigate = useNavigate()

   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
   } = useForm<DataType>({ mode: 'onSubmit' })

   const imageHandler = (e: ChangeEvent<HTMLInputElement>): void => {
      const files: FileList | null = e.target.files

      if (files) {
         setFileName(files[0].name)

         const formData = new FormData()

         formData.append('file', files[0])
         formData.append('upload_preset', 'ees8ffne')

         dispatch(uploadImageAsync(formData))
      }
   }


   const submitHandler: SubmitHandler<DataType> = (data): void => {
      if (url) {
         const post: BlogType = { ...data, file: url }

         dispatch(uploadBlogAsync(post))
         dispatch(resetUrl())

         setFileName('')
         navigate('/blogs')
         reset()
      }
   }

   return (
      <BlogsCreateEl>
         <Container>
            <BlogsCreateBody>
               <BlogsCreateTitle>Create your post</BlogsCreateTitle>

               <BlogsCreateForm onSubmit={handleSubmit(submitHandler)}>

                  <BlogsCreateFieldWrapper>
                     <BlogsCreateLabel>
                        <BlogsCreateInput
                           {...register('author', {
                              required: 'Field is required',
                              minLength: { value: 3, message: 'Min 3 symbols' },
                              maxLength: { value: 10, message: 'Max 20 symbols' },
                           })}
                           placeholder='Author'
                           type='text'
                        />
                     </BlogsCreateLabel>
                     {errors?.author && <ErrorMessage justifyContent='flex-start'>{errors?.author?.message}</ErrorMessage>}
                  </BlogsCreateFieldWrapper>

                  <BlogsCreateFieldWrapper>
                     <BlogsCreateLabel>
                        <BlogsCreateInput
                           {...register('title', {
                              required: 'Field is required',
                              minLength: { value: 3, message: 'Min 3 symbols' },
                              maxLength: { value: 30, message: 'Max 20 symbols' },
                           })}
                           placeholder='Title'
                           type='text'
                        />
                     </BlogsCreateLabel>
                     {errors?.title && <ErrorMessage justifyContent='flex-start'>{errors?.title?.message}</ErrorMessage>}
                  </BlogsCreateFieldWrapper>

                  <BlogsCreateFieldWrapper>
                     <BlogsCreateLabel>
                        <BlogsCreateTextarea
                           {...register('description', {
                              required: 'Field is required',
                              minLength: { value: 3, message: 'Min 3 symbols' },
                           })}
                           placeholder='Description'
                        />
                     </BlogsCreateLabel>
                     {errors?.description && <ErrorMessage justifyContent='flex-start'>{errors?.description?.message}</ErrorMessage>}
                  </BlogsCreateFieldWrapper>


                  <BlogsCreateFieldWrapper>
                     <BlogsCreateLabelWrapper>
                        <BlogsCreateLabelFile>
                           <BlogsCreateInputFile
                              {...register('file', {
                                 required: 'Field is required',
                              })}
                              type='file'
                              onChange={imageHandler}
                              hidden
                           />
                           Upload image
                        </BlogsCreateLabelFile>

                        <SpecialTitle fontSize='var(--fs-sm)'>
                           {fileName}
                        </SpecialTitle>

                     </BlogsCreateLabelWrapper>
                     {errors?.file && <ErrorMessage justifyContent='flex-start'>{errors?.file?.message}</ErrorMessage>}
                  </BlogsCreateFieldWrapper>


                  <BlogsCreatePreview>
                     {status === StatusEnum.PENDING ?
                        <SpinnerWrapper height='30vh'>
                           <Spinner />
                        </SpinnerWrapper>
                        :
                        <BlogsCreatePreviewImage url={url} src={`${url}`} alt='preview' />
                     }

                     {error && <ErrorMessage>
                        <BiError />
                        {error}
                     </ErrorMessage>}
                  </BlogsCreatePreview>

                  <BlogsCreateButton type='submit' name='submit'>Create</BlogsCreateButton>

                  {errorUploadBlog && <ErrorMessage>
                     <BiError />
                     {error}
                  </ErrorMessage>}

               </BlogsCreateForm>
            </BlogsCreateBody>
         </Container>
      </BlogsCreateEl>
   )
}