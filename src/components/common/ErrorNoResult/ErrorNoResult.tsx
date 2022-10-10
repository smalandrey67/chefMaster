import { FC } from 'react'

import ManShrugging from 'assets/images/main/man-shrugging.svg'
import { ErrorWrapper } from 'assets/styled/Reused.styled'
import * as Style from './ErrorNoResult.styled'

import { ErrorNotResultProps } from './ErrorNoResult.types'

export const ErrorNoResult: FC<ErrorNotResultProps> = ({ description, height }) => {

   return (
      <ErrorWrapper height={height} flexDirection='column'>
         <Style.ErrorNoResultWrapperImage>
            <Style.ErrorNoResultImage src={ManShrugging} alt='man shrugging' />
         </Style.ErrorNoResultWrapperImage>

         <Style.ErrorNoResultTitle>{description}</Style.ErrorNoResultTitle>
      </ErrorWrapper>
   )
}
