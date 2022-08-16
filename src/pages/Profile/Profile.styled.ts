import styled from 'styled-components'

import { Button } from 'assets/styled/Reused.styled'

export const ProfileEl = styled.section``

export const ProfileContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
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
`

export const ProfileInputUpload = styled.input`
   display: none;
`

export const ProfileImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`

export const ProfileEmail = styled.h4`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 0 10px 0;
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