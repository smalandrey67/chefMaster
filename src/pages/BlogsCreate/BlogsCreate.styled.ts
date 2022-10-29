import styled from 'styled-components'
import { Button, Flex, Image } from 'assets/styled/Reused.styled'

import { BlogsCreatePreviewImageProps } from './BlogsCreate.types'

export const BlogsCreateBody = styled.div`
  max-width: 500px;
  margin: 0 auto 20px auto;
`
export const BlogsCreateFileWrapper = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 5px;
`
export const BlogsCreateLabelFile = styled(Button)`
  flex: 0 1 150px;
  height: 50px;
  margin-right: 10px;
`
export const BlogsCreateTextarea = styled.textarea`
  border: none;
  resize: none;
  height: 150px;
  width: 100%;
  font-size: var(--fs-md);
  outline: none;
  background-color: transparent;
  padding: 10px;
  &::placeholder {
    color: var(--color-alternative);
  }
`
export const BlogsCreatePreview = styled.div`
  border-radius: var(--br-radius);
  overflow: hidden;
  margin-bottom: 5px;
`
export const BlogsCreatePreviewImage = styled(Image)<BlogsCreatePreviewImageProps>`
  display: ${(props): 'none' | 'block' => (props.userPhoto ? 'block' : 'none')};
`
