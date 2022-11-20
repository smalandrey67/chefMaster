import { FC } from 'react'

import * as ReusedStyle from 'assets/styled/Reused.styled'
import { HeaderLogoWrapper } from 'components/business/Header/Header.styled'

import { ImSpoonKnife } from 'react-icons/im'

export const Preload: FC = () => {
  return (
    <ReusedStyle.SpinnerWrapper height='50vh'>
      <HeaderLogoWrapper>
        <ImSpoonKnife size='25' />
        <ReusedStyle.Title>ChefMaster...</ReusedStyle.Title>
      </HeaderLogoWrapper>
    </ReusedStyle.SpinnerWrapper>
  )
}
