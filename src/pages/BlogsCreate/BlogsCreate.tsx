import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { stringCut } from '../../utils/helpers/string.helper'
import { extension } from '../../utils/constants/extension.constants'
import { validation } from '../../utils/constants/validation.constants'

import SpinnerSm from '../../assets/images/icons/spinner-sm.svg'
import { Container, SpinnerWrapper, Spinner, SpecialTitle, ErrorMessage } from '../../assets/styled/Reused.styled'
import {
   BlogsCreateEl, BlogsCreateBody, BlogsCreateForm, BlogsCreateFieldset, BlogsCreateLegend, BlogsCreateLabel, BlogsCreateInput,
   BlogsCreateLabelFile,
   BlogsCreateInputFile,
   BlogsCreateTextarea,
   BlogsCreateButton,
   BlogsCreatePreview,
   BlogsCreatePreviewImage,
   BlogsCreateFieldWrapper,
   BlogsCreateLabelWrapper
} from './BlogsCreate.styled'

import { SubmitBlogType } from '../../@types/Blogs'
import { BiError } from 'react-icons/bi'

import { useImage } from './hook/useImage'
import { useSubmit } from './hook/useSubmit'

export const BlogsCreate: FC = () => {
   const { register, formState: { errors }, handleSubmit, reset } = useForm<SubmitBlogType>({ mode: 'onChange' })

   const { changeFileHandler, fileName, setFileName, image, isLoading, errorImage } = useImage()
   const { errorBlog, submitHandler } = useSubmit(image, setFileName, reset)

   return (
      <BlogsCreateEl>
         <Container>
            <BlogsCreateBody>
               <BlogsCreateForm onSubmit={handleSubmit(submitHandler)}>
                  <BlogsCreateFieldset>
                     <BlogsCreateLegend>Create your own post</BlogsCreateLegend>
                     <BlogsCreateFieldWrapper>
                        <BlogsCreateLabel>
                           <BlogsCreateInput
                              {...register('author', validation.author)}
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
                              {...register('title', validation.title)}
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
                              {...register('description', validation.description)}
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
                                 {...register('file', validation.file)}
                                 type='file'
                                 accept={extension.join(',')}
                                 onChange={changeFileHandler}
                                 hidden
                              />
                              Upload image
                           </BlogsCreateLabelFile>

                           {/* name of file */}
                           <SpecialTitle fontSize='var(--fs-sm)'>
                              {stringCut(fileName, 23)}
                           </SpecialTitle>

                        </BlogsCreateLabelWrapper>
                        {errors?.file && <ErrorMessage justifyContent='flex-start'>{errors?.file?.message}</ErrorMessage>}
                     </BlogsCreateFieldWrapper>

                     <BlogsCreatePreview>
                        {isLoading ?
                           <SpinnerWrapper height='15vh'>
                              <Spinner src={SpinnerSm} alt='spinner' />
                           </SpinnerWrapper>
                           :
                           <BlogsCreatePreviewImage url={image?.secure_url} src={`${image?.secure_url}`} alt='preview' />
                        }

                        {/* Error while image uploading */}
                        {errorImage && <ErrorMessage><BiError />Server Error</ErrorMessage>}
                     </BlogsCreatePreview>

                     {/* Error while post uploading*/}
                     {errorBlog && <ErrorMessage><BiError />Server Error</ErrorMessage>}

                     <BlogsCreateButton type='submit' name='submit'>Create</BlogsCreateButton>
                  </BlogsCreateFieldset>
               </BlogsCreateForm>
            </BlogsCreateBody>
         </Container>
      </BlogsCreateEl>
   )
}