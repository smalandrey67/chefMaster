import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { stringCut } from 'utils/helpers/string.helper'
import { extension } from 'utils/constants/extension.constants'
import { validation } from 'utils/constants/validation.constants'

import { FormContainer } from 'components/containers/FormContainer/FormContainer'
import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'

import SpinnerSm from 'assets/images/icons/spinner-sm.svg'
import {
  SpinnerWrapper,
  Spinner,
  Strong,
  ErrorMessage,
  Legend,
  Group,
  Label,
  Input,
  Button
} from 'assets/styled/Reused.styled'
import * as Style from './BlogsCreate.styled'

import { SubmitBlogType } from 'types/Blogs'
import { BiError } from 'react-icons/bi'

import { useUploadImage } from './hook/useUploadImage'
import { useBlogSubmit } from './hook/useBlogSubmit'

export const BlogsCreate: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<SubmitBlogType>({ mode: 'onChange' })

  const { changeFileHandler, fileName, setFileName, userPhoto, isLoading, errorUploadingImage } = useUploadImage()
  const { errorBlog, submitBlogHandler } = useBlogSubmit(userPhoto, setFileName, reset)

  return (
    <SectionContainer>
      <Style.BlogsCreateBody>
        <FormContainer handleSubmit={handleSubmit} submitHandler={submitBlogHandler}>
          <Legend>Create your own post</Legend>
          <Group margin='10px 0 20px 0' width='100%' height='50px'>
            <Label>
              <Input {...register('title', validation.title)} placeholder='Title' type='text' />
            </Label>
            {errors?.title && (
              <ErrorMessage margin='5px 0 0 0' justifyContent='flex-start'>
                {errors?.title?.message}
              </ErrorMessage>
            )}
          </Group>
          <Group margin='0 0 10px 0' width='100%'>
            <Label>
              <Style.BlogsCreateTextarea
                {...register('description', validation.description)}
                placeholder='Description'
              />
            </Label>
            {errors?.description && (
              <ErrorMessage margin='5px 0 0 0' justifyContent='flex-start'>
                {errors?.description?.message}
              </ErrorMessage>
            )}
          </Group>

          <Group margin='0 0 20px 0' width='100%' height='50px'>
            <Style.BlogsCreateFileWrapper>
              <Style.BlogsCreateLabelFile as='label'>
                <Input
                  {...register('file', validation.file)}
                  type='file'
                  accept={extension.join(',')}
                  onChange={changeFileHandler}
                  hidden
                />
                Upload image
              </Style.BlogsCreateLabelFile>
              <Strong fontSize='var(--fs-sm)'>{stringCut(fileName, 23)}</Strong>
            </Style.BlogsCreateFileWrapper>
            {errors?.file && (
              <ErrorMessage margin='5px 0 0 0' justifyContent='flex-start'>
                {errors?.file?.message}
              </ErrorMessage>
            )}
          </Group>

          <Style.BlogsCreatePreview>
            {isLoading ? (
              <SpinnerWrapper height='15vh'>
                <Spinner src={SpinnerSm} alt='spinner' />
              </SpinnerWrapper>
            ) : (
              <Style.BlogsCreatePreviewImage userPhoto={userPhoto} src={userPhoto} alt='preview' />
            )}
            {/* Error while image uploading */}
            {errorUploadingImage && (
              <ErrorMessage>
                <BiError />
                Server Error
              </ErrorMessage>
            )}
          </Style.BlogsCreatePreview>

          <Group height='50px'>
            <Button type='submit' name='submit'>
              Create
            </Button>
          </Group>
          {/* Error while post uploading*/}
          {errorBlog && (
            <ErrorMessage>
              <BiError />
              Server Error
            </ErrorMessage>
          )}
        </FormContainer>
      </Style.BlogsCreateBody>
    </SectionContainer>
  )
}
