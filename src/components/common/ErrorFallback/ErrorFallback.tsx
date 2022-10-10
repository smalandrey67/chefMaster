import { FC } from 'react'

import { BiError } from 'react-icons/bi'
import * as Style from 'assets/styled/Reused.styled'

import { ErrorFallbackProps } from './ErrorFallback.types'

export const ErrorFallback: FC<ErrorFallbackProps> = ({ height }) => {

  return (
    <Style.ErrorWrapper height={height}>
      <Style.ErrorMessage justifyContent='center'>
        <BiError />
        something went wrong. Server error
      </Style.ErrorMessage>
    </Style.ErrorWrapper>
  )
}