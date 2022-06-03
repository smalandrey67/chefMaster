import styled from 'styled-components'

type ErrorFallbackWrapperProps = {
   height: string
}

export const ErrorFallbackWrapper = styled.div<ErrorFallbackWrapperProps>`
   display: flex;
   align-items: center;
   justify-content: center;

   height: ${({ height }) => height || 'auto'}
`