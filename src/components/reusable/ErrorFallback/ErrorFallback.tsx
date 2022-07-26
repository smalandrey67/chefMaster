import { FC } from 'react'

import { BiError } from 'react-icons/bi'
import { ErrorWrapper, ErrorMessage } from 'assets/styled/Reused.styled'

type ErrorFallbackProps = {
  height: string;
}

export const ErrorFallback: FC<ErrorFallbackProps> = ({ height }) => {

  return (
    <ErrorWrapper height={height}>
      <ErrorMessage justifyContent='center'>
        <BiError />
        something went wrong. Server error
      </ErrorMessage>
    </ErrorWrapper>
  )
}
