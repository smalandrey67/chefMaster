import { FC } from 'react'

import { BiError } from 'react-icons/bi'

import { ErrorMessage } from '../../assets/styled/Reused.styled'
import { ErrorFallbackWrapper } from './ErrorFallback.styled'

type ErrorFallbackProps = {
  height: string
}

export const ErrorFallback: FC<ErrorFallbackProps> = ({ height }) => {

  return (
    <ErrorFallbackWrapper height={height} >
      <ErrorMessage justifyContent='center'>
        <BiError />
        someting went wrong. Server error
      </ErrorMessage>
    </ErrorFallbackWrapper>
  )
}
