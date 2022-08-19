import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { stringCut } from 'utils/helpers/string.helper'
import { extension } from 'utils/constants/extension.constants'
import { validation } from 'utils/constants/validation.constants'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import SpinnerSm from 'assets/images/icons/spinner-sm.svg'
import {
   SpinnerWrapper,
   Spinner, SpecialTitle,
   ErrorMessage, Form, Fieldset, Legend, Group, Label, Input, Button
} from 'assets/styled/Reused.styled'
import { BlogsCreateBody, BlogsCreateLabel,
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

export const BlogsCreate: FC = () => {
   const { register, formState: { errors }, handleSubmit, reset } = useForm<SubmitBlogType>({ mode: 'onChange' })

   const { changeFileHandler, fileName, setFileName, image, isLoading, errorImage } = useImage()
   const { errorBlog, submitHandler } = useSubmit(image, setFileName, reset)

   return (
      <SectionContainer>
         <BlogsCreateBody>
            <Form onSubmit={handleSubmit(submitHandler)}>
               <Fieldset>
                  <Legend>Create your own post</Legend>
                  <Group>
                     <Label>
                        <Input
                           {...register('author', validation.author)} placeholder='author' type='text'
                        />
                     </Label>
                     {errors?.author && <ErrorMessage justifyContent='flex-start'>{errors?.author?.message}</ErrorMessage>}
                  </Group>
                  <Group>
                     <Label>
                        <Input
                           {...register('title', validation.title)} placeholder='Title' type='text'
                        />
                     </Label>
                     {errors?.title && <ErrorMessage justifyContent='flex-start'>{errors?.title?.message}</ErrorMessage>}
                  </Group>
                  <Group>
                     <BlogsCreateLabel>
                        <BlogsCreateTextarea
                           {...register('description', validation.description)} placeholder='Description'
                        />
                     </BlogsCreateLabel>
                     {errors?.description && <ErrorMessage justifyContent='flex-start'>{errors?.description?.message}</ErrorMessage>}
                  </Group>
                  <Group>
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
                  </Group>

                  <BlogsCreatePreview>
                     {isLoading ?
                        <SpinnerWrapper height='15vh'>
                           <Spinner src={SpinnerSm} alt='spinner' />
                        </SpinnerWrapper>
                        :
                        <BlogsCreatePreviewImage url={image} src={`${image}`} alt='preview' />
                     }

                     {/* Error while image uploading */}
                     {errorImage && <ErrorMessage><BiError />Server Error</ErrorMessage>}
                  </BlogsCreatePreview>

                  <Button type='submit' name='submit'>Create</Button>
                  {/* Error while post uploading*/}
                  {errorBlog && <ErrorMessage><BiError />Server Error</ErrorMessage>}
               </Fieldset>
            </Form>
         </BlogsCreateBody>
      </SectionContainer>
   )
}