import { FC } from 'react'

import { BiError } from 'react-icons/bi'
import * as ReusedStyle from 'assets/styled/Reused.styled'

import { ErrorFallbackProps } from './ErrorFallback.types'

export const ErrorFallback: FC<ErrorFallbackProps> = ({ height }) => {
  return (
    <ReusedStyle.ErrorWrapper height={height}>
      <ReusedStyle.ErrorMessage justifyContent='center'>
        <BiError />
        something went wrong. Server error
      </ReusedStyle.ErrorMessage>
    </ReusedStyle.ErrorWrapper>
  )
}
