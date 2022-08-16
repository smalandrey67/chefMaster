import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { stringCut } from 'utils/helpers/string.helper'
import { extension } from 'utils/constants/extension.constants'
import { validation } from 'utils/constants/validation.constants'

import SpinnerSm from 'assets/images/icons/spinner-sm.svg'
import { Container, SpinnerWrapper, Spinner, SpecialTitle, ErrorMessage, FieldBlock } from 'assets/styled/Reused.styled'
import {
   BlogsCreateEl, BlogsCreateBody, BlogsCreateLabel,
   BlogsCreateLabelFile,
   BlogsCreateInputFile,
   BlogsCreateTextarea,
   BlogsCreatePreview,
   BlogsCreatePreviewImage,
   BlogsCreateLabelWrapper
} from './BlogsCreate.styled'

import { SubmitBlogType } from 'types/Blogs'
import { BiError } from 'react-icons/bi'

import { useImage } from './hook/useImage'
import { useSubmit } from './hook/useSubmit'

import { InputContainer } from 'components/containers/InputContainer/InputContainer'
import { FormContainer } from 'components/containers/FormContainer/FormContainer'

export const BlogsCreate: FC = () => {
   const { register, formState: { errors }, handleSubmit, reset } = useForm<SubmitBlogType>({ mode: 'onChange' })

   const { changeFileHandler, fileName, setFileName, image, isLoading, errorImage } = useImage()
   const { errorBlog, submitHandler } = useSubmit(image, setFileName, reset)

   return (
      <BlogsCreateEl>
         <Container>
            <BlogsCreateBody>
               <FormContainer title='Create your own post' buttonTitle='Create' handleSubmit={handleSubmit} submitHandler={submitHandler}>
                  <FieldBlock>
                     <InputContainer
                        register={register}
                        registerName='author'
                        validationType={validation.author}
                        placeholder='Author'
                        type='text'
                        autoComplete='off'
                     />
                     {errors?.author && <ErrorMessage justifyContent='flex-start'>{errors?.author?.message}</ErrorMessage>}
                  </FieldBlock>
                  <FieldBlock>
                     <InputContainer
                        register={register}
                        registerName='title'
                        validationType={validation.file}
                        placeholder='Title'
                        type='text'
                        autoComplete='off'
                     />
                     {errors?.title && <ErrorMessage justifyContent='flex-start'>{errors?.title?.message}</ErrorMessage>}
                  </FieldBlock>
                  <FieldBlock>
                     <BlogsCreateLabel>
                        <BlogsCreateTextarea
                           {...register('description', validation.description)}
                           placeholder='Description'
                           autoComplete='off'
                        />
                     </BlogsCreateLabel>
                     {errors?.description && <ErrorMessage justifyContent='flex-start'>{errors?.description?.message}</ErrorMessage>}
                  </FieldBlock>
                  <FieldBlock>
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
                  </FieldBlock>

                  <BlogsCreatePreview>
                     {isLoading ?
                        <SpinnerWrapper height='15vh'>
                           <Spinner src={SpinnerSm} alt='spinner' />
                        </SpinnerWrapper>
                        :
                        <BlogsCreatePreviewImage url={image ?? ''} src={image ?? ''} alt='preview' />
                     }

                     {/* Error while image uploading */}
                     {errorImage && <ErrorMessage><BiError />Server Error</ErrorMessage>}
                  </BlogsCreatePreview>

                  {/* Error while post uploading*/}
                  {errorBlog && <ErrorMessage><BiError />Server Error</ErrorMessage>}
               </FormContainer>
            </BlogsCreateBody>
         </Container>
      </BlogsCreateEl>
   )
}