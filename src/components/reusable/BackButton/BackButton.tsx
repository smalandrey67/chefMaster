import { FC, ReactNode } from 'react'

import { BackButtonWrapper } from './BackButton.styled'
import { ButtonBack } from 'assets/styled/Reused.styled'

import { useBack } from 'hooks/useBack'
import { IoMdArrowRoundBack } from 'react-icons/io'

type BackButtonProps = {
   children: ReactNode;
}

export const BackButton: FC<BackButtonProps> = ({ children }) => {
   const { pageBackHandler } = useBack()

   return (
      <BackButtonWrapper>
         <ButtonBack onClick={pageBackHandler}>
            <IoMdArrowRoundBack size='16' />
            back
         </ButtonBack>
         {children}
      </BackButtonWrapper>
   )
}