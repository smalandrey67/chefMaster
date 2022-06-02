import styled from 'styled-components'
import { Button, Input } from '../../styled/Reused.styled'

export const AnswerHeader = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   margin-bottom: 20px;
`

export const AnswerHeaderTitle = styled.h4`
   margin: 0;
   font-size: var(--fs-md);
`


export const AnswerSubtitle = styled.p`
   display: flex;
   align-items: center;
   justify-content: space-between;

   margin: 0 0 10px 0;
`

export const AnswerForm = styled.form`
   margin-bottom: 20px;
`


export const AnswerFormBody = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   height: 40px;  
   margin-bottom: 5px;
`

export const AnswerFormInput = styled(Input).attrs({
   placeholder: 'Question',
   type: 'text'
})`
   height: 100%;
   flex: 0 1 70%;
   padding: 0 15px;
   font-weight: var(--fw-semiBold);
   margin-right: 7px;

   box-shadow: var(---shadow);
   -webkit-box-shadow: var(--shadow);
`

export const AnswerFormButton = styled(Button).attrs({
   type: 'submit',
   name: 'tab',
})`
   flex: 0 1 30%;
   background-color: var(--color-categories);
   color: var(--color-white);
`


export const AnswerAnswer = styled.div`
   display: flex;
   align-items: center;
`

export const AnswerImage = styled.img`
   border-radius: var(--br-radius);
   object-fit: contain;
`






