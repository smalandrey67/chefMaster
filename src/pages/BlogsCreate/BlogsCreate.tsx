import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { stringCut } from 'utils/stringCut'
import { extension } from 'constants/extension'
import { validation } from 'constants/validation'

import { FormContainer } from 'components/containers/FormContainer/FormContainer'
import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'

import SpinnerSm from 'assets/images/icons/spinner-sm.svg'
import * as ReusedStyle from 'assets/styled/Reused.styled'
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
          <ReusedStyle.Legend>Create your own post</ReusedStyle.Legend>
          <ReusedStyle.Group margin='10px 0 20px 0' width='100%' height='50px'>
            <ReusedStyle.Label>
              <ReusedStyle.Input {...register('title', validation.title)} placeholder='Title' type='text' />
            </ReusedStyle.Label>
            {errors?.title && (
              <ReusedStyle.ErrorMessage margin='5px 0 0 0' justifyContent='flex-start'>
                {errors?.title?.message}
              </ReusedStyle.ErrorMessage>
            )}
          </ReusedStyle.Group>
          <ReusedStyle.Group margin='0 0 10px 0' width='100%'>
            <ReusedStyle.Label>
              <Style.BlogsCreateTextarea
                {...register('description', validation.description)}
                placeholder='Description'
              />
            </ReusedStyle.Label>
            {errors?.description && (
              <ReusedStyle.ErrorMessage margin='5px 0 0 0' justifyContent='flex-start'>
                {errors?.description?.message}
              </ReusedStyle.ErrorMessage>
            )}
          </ReusedStyle.Group>

          <ReusedStyle.Group margin='0 0 20px 0' width='100%' height='50px'>
            <Style.BlogsCreateFileWrapper>
              <Style.BlogsCreateLabelFile as='label'>
                <ReusedStyle.Input
                  {...register('file', validation.file)}
                  type='file'
                  accept={extension.join(',')}
                  onChange={changeFileHandler}
                  hidden
                />
                Upload image
              </Style.BlogsCreateLabelFile>
              <ReusedStyle.Strong fontSize='var(--fs-sm)'>{stringCut(fileName, 23)}</ReusedStyle.Strong>
            </Style.BlogsCreateFileWrapper>
            {errors?.file && (
              <ReusedStyle.ErrorMessage margin='5px 0 0 0' justifyContent='flex-start'>
                {errors?.file?.message}
              </ReusedStyle.ErrorMessage>
            )}
          </ReusedStyle.Group>

          <Style.BlogsCreatePreview>
            {isLoading ? (
              <ReusedStyle.SpinnerWrapper height='15vh'>
                <ReusedStyle.Spinner src={SpinnerSm} alt='spinner' />
              </ReusedStyle.SpinnerWrapper>
            ) : (
              <Style.BlogsCreatePreviewImage userPhoto={userPhoto} src={userPhoto} alt='preview' />
            )}
            {/* Error while image uploading */}
            {errorUploadingImage && (
              <ReusedStyle.ErrorMessage>
                <BiError />
                Server Error
              </ReusedStyle.ErrorMessage>
            )}
          </Style.BlogsCreatePreview>

          <ReusedStyle.Group height='50px'>
            <ReusedStyle.Button type='submit' name='submit'>
              Create
            </ReusedStyle.Button>
          </ReusedStyle.Group>
          {/* Error while post uploading*/}
          {errorBlog && (
            <ReusedStyle.ErrorMessage>
              <BiError />
              Server Error
            </ReusedStyle.ErrorMessage>
          )}
        </FormContainer>
      </Style.BlogsCreateBody>
    </SectionContainer>
  )
}
