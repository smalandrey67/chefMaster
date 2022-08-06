import { FC } from 'react'

import { SpinnerWrapper } from 'assets/styled/Reused.styled'
import { HeaderBlogsWrapper } from '../../business/Header/Header.styled'
import { PreloadTitle } from './Preload.styled'

import { ImSpoonKnife } from 'react-icons/im'

export const Preload: FC = () => {

   return (
      <SpinnerWrapper height='50vh'>
         <HeaderBlogsWrapper>
            <ImSpoonKnife size='25' />
            <PreloadTitle>ChefMaster...</PreloadTitle>
         </HeaderBlogsWrapper>
      </SpinnerWrapper>
   )
}