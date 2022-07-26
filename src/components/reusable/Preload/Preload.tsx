import { FC } from 'react'

import { SpinnerWrapper } from 'assets/styled/Reused.styled'
import { HeaderBlogsWrapper, HeaderLogo } from '../../business/Header/Header.styled'

import { ImSpoonKnife } from 'react-icons/im'

export const Preload: FC = () => {

   return (
      <SpinnerWrapper height='50vh'>
         <HeaderBlogsWrapper>
            <ImSpoonKnife size='25' />
            <HeaderLogo to='/'>ChefMaster...</HeaderLogo>
         </HeaderBlogsWrapper>
      </SpinnerWrapper>
   )
}