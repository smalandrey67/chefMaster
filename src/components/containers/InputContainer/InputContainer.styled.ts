import styled from 'styled-components'

import { Input } from 'assets/styled/Reused.styled'

export const Label = styled.label`
   display: flex;
   align-items: center;
   min-height: 50px;
   padding: 10px 15px;
   width: 100%;
   box-shadow: var(--shadow);
   border-radius: var(--br-radius);
   background-color: var(--color-white);

   &:not(:last-child){
      margin-bottom: 5px;
   }
`

export const InputEl = styled(Input)`
   width: 100%;
   font-weight: var(--fw-semiBold);
` 
