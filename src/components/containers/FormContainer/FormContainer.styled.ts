import { Button } from 'assets/styled/Reused.styled'
import styled from 'styled-components'

export const Form = styled.form`
   max-width: 500px;
   margin: 0 auto;
`

export const FormFieldset = styled.fieldset`
   padding: 0;
   border-color: transparent;
`

export const FormLegend = styled.legend`
   text-align: center;
   font-weight: var(--fw-semiBold);
   font-size: var(--fs-md);
`

export const FormButton = styled(Button)`
   width: 100%;
   margin: 5px 0 10px 0;
   background-color: var(--color-white);

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