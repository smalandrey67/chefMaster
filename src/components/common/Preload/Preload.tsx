import { FC } from 'react'

import { SpinnerWrapper, Title } from 'assets/styled/Reused.styled'
import { HeaderLogoWrapper } from 'components/business/Header/Header.styled'

import { ImSpoonKnife } from 'react-icons/im'

export const Preload: FC = () => {
  return (
    <SpinnerWrapper height='50vh'>
      <HeaderLogoWrapper>
        <ImSpoonKnife size='25' />
        <Title>ChefMaster...</Title>
      </HeaderLogoWrapper>
    </SpinnerWrapper>
  )
}
