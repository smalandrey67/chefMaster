import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PopupEl = styled(motion.div)`
   position: fixed;
   width: 100%;
   height: 100%;
   background-color: var(--color-gradient);
   top: 0;
   left: 0;
`

export const PopupBody = styled.div`
   min-height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 30px 10px;
`

export const PopupContent = styled.div`
   background-color: var(--color-background);
   color: var(--color-text);
   width: 800px;
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
   align-items: flex-start;
   gap: 5px;
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

export const PopupFormInput = styled.input.attrs({
   type: 'text',
   name: 'question',
   placeholder: 'ask question',
})`
   height: 100%;
   flex: 0 1 70%;
   box-shadow: var(--shadow);
   border-radius: var(--br-radius);
   padding: 0 15px;
   background-color: var(--color-background);

   font-size: var(--fs-sm);
   font-weight: var(--fw-semiBold);

   &::placeholder{
        font-weight: var(--fw-semiBold);
        color: var(--color-alternative);

    }
`

export const PopupFormButton = styled.button.attrs({
   type: 'submit',
   name: 'submit',
})`
   height: 100%;  
   flex: 0 1 30%;
   background-color: var(--color-categories);
   color: var(--color-white);
   border-radius: var(--br-radius);
   transition: all 0.5s ease;
`


export const PopupAnswer = styled.div``






