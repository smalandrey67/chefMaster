import styled from 'styled-components'

import { Button, Flex } from 'assets/styled/Reused.styled'

export const ProfileContent = styled(Flex)`
   flex-direction: column;
   max-width: 300px;
   margin: 0 auto; 
`
export const ProfileImageWrapper = styled.div`
   width: 200px;
   height: 200px;
   border-radius: 50%;
   overflow: hidden;
   margin-bottom: 15px;
   position: relative;
`
export const ProfileUploadLabel = styled.label`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   cursor: pointer;
`

export const ProfileBackgroundOverImage = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   opacity: 0;

   &:active {
      background-color: var(--color-grey);
      opacity: 0.4;
   }
    
   @media (hover: hover) {
      transition: all 0.3s ease;
      &:hover {
         background-color: var(--color-grey);
         opacity: 0.4;
      }
   }
`

export const ProfileButtonLogOut = styled(Button)`
   width: 100%;
   margin-bottom: 10px;
   &:active{
      background-color: var(--color-categories);
      color: var(--color-white);
   }
   @media (hover: hover) {
      transition: all 0.5s ease;
      &:hover{
         background-color: var(--color-categories);
         color: var(--color-white);
      }
   }
`