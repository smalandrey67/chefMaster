import { FC } from 'react'

import * as Style from './BackButtonContainer.styled'

import { useBack } from 'hooks/useBack'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { BackButtonContainerProps } from './BackButtonContainer.types'

export const BackButtonContainer: FC<BackButtonContainerProps> = ({ buttonTitle, children }) => {
  const pageBackHandler = useBack()

  return (
    <Style.BackButtonContainerWrapper>
      <Style.ButtonBack onClick={pageBackHandler}>
        <IoMdArrowRoundBack size='16' />
        {buttonTitle}
      </Style.ButtonBack>
      {children}
    </Style.BackButtonContainerWrapper>
  )
}
