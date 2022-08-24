import { FC } from 'react'

import { BackButtonContainerWrapper, ButtonBack } from './BackButtonContainer.styled'

import { useBack } from 'hooks/useBack'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { BackButtonContainerProps } from './BackButtonContainer.types'

export const BackButtonContainer: FC<BackButtonContainerProps> = ({ children }) => {
   const pageBackHandler = useBack()

   return (
      <BackButtonContainerWrapper>
         <ButtonBack onClick={pageBackHandler}>
            <IoMdArrowRoundBack size='16' />
            back
         </ButtonBack>
         {children}
      </BackButtonContainerWrapper>
   )
}