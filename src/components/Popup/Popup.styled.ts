import styled, { css } from 'styled-components'
import { Button, Input } from '../../styled/Reused.styled'

import { motion } from 'framer-motion'


export const PopupEl = styled(motion.div)`
   position: fixed;
   width: 100%;
   height: 100%;
   background-color: var(--color-gradient);
   top: 0;
   left: 0;
   z-index: 150;
`

export const PopupBody = styled.div`
   min-height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 30px 10px;
`

export const PopupContent = styled.div`
   background-color: var(--color-white);
   color: var(--color-text);
   width: 500px;
   padding: 10px;
   border-radius: var(--br-radius);
`

export const PopupHeader = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   margin-bottom: 20px;
`

export const PopupHeaderTitle = styled.h4`
   margin: 0;
   font-size: var(--fs-md);
`

export const PopupSubtitleSpan = styled.span`
   font-weight: var(--fw-bold);
`

export const PopupSubtitle = styled.p`
   display: flex;
   align-items: center;
   justify-content: space-between;

   margin: 0 0 10px 0;
`

export const PopupForm = styled.form`
   margin-bottom: 15px;
`


export const PopupFormBody = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   height: 40px;  
`

export const PopupFormInput = styled(Input).attrs({
   type: 'text',
   name: 'question',
   placeholder: 'Question',
})`
   height: 100%;
   flex: 0 1 70%;
   padding: 0 15px;
   font-weight: var(--fw-semiBold);
   
   box-shadow: var(--shadow);
   -webkit-box-shadow: var(--shadow);
`

export const PopupFormButton = styled(Button).attrs({
   type: 'submit',
   name: 'tab',
})`
   flex: 0 1 30%;
   background-color: var(--color-categories);
   color: var(--color-white);
`


export const PopupAnswer = styled.div`
   display: flex;
   align-items: center;
`

export const PopupImage = styled.img`
   object-fit: contain;
`






