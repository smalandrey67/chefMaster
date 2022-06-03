import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { useAppSelector } from '../../hooks/useRedux'

import { stringCut } from '../../utils/helpers/string.helpers'

import { Container, SpinnerWrapper, Spinner, SpecialTitle, ErrorMessage } from '../../assets/styled/Reused.styled'
import {
   BlogsCreateEl,
   BlogsCreateBody,
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

import { StatusEnum } from '../../models/Status'
import { DataType } from '../../models/Blogs'

import SpinnerSm from '../../assets/images/spinner-sm.svg'
import { BiError } from 'react-icons/bi'

import { useImage } from './hook/image'
import { useSubmit } from './hook/submit'


export const BlogsCreate: FC = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
      reset
   } = useForm<DataType>({ mode: 'onChange' })

   const { imageHandler, fileName, setFileName, url, status, error } = useImage()
   const { submitHandler } = useSubmit(url, setFileName, reset)

   const { errorUploadBlog } = useAppSelector(state => state.uploadBlogR)

   return (
      <BlogsCreateEl>
         <Container>
            <BlogsCreateBody>
               <BlogsCreateForm onSubmit={handleSubmit(submitHandler)}>
                  <BlogsCreateFieldWrapper>
                     <BlogsCreateLabel>
                        <BlogsCreateInput
                           {...register('author', {
                              required: 'Field is required',
                              minLength: { value: 3, message: 'Min 3 symbols' },
                              maxLength: { value: 30, message: 'Max 20 symbols' },
                           })}
                           placeholder='Author'
                           type='text'
                           autoComplete='off'
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
                           autoComplete='off'
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
                           autoComplete='off'
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
                              accept=".png,.jpg,.jpeg"
                              onChange={imageHandler}
                              hidden
                           />
                           Upload image
                        </BlogsCreateLabelFile>

                        <SpecialTitle fontSize='var(--fs-sm)'>
                           {stringCut(fileName,23)}
                        </SpecialTitle>

                     </BlogsCreateLabelWrapper>
                     {errors?.file && <ErrorMessage justifyContent='flex-start'>{errors?.file?.message}</ErrorMessage>}
                  </BlogsCreateFieldWrapper>


                  {/* Preview for upload image */}
                  <BlogsCreatePreview>
                     {status === StatusEnum.PENDING ?
                        <SpinnerWrapper height='15vh'>
                           <Spinner src={SpinnerSm} alt='spinner' />
                        </SpinnerWrapper>
                        :
                        <BlogsCreatePreviewImage url={url} src={`${url}`} alt='preview' />
                     }

                     {/* Error if i'll get an error while i'll be uploading image */}
                     {error && <ErrorMessage>
                        <BiError />
                        {error}
                     </ErrorMessage>}
                  </BlogsCreatePreview>


                  <BlogsCreateButton type='submit' name='submit'>Create</BlogsCreateButton>

                  {/* Error if i'll get an error while i'll be uploading the whole post */}
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