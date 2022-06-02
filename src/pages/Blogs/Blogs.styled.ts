import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const BlogsEl = styled.section``

export const BolgsAddWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-bottom: 10px;
`

export const BlogsAdd = styled(Link).attrs({
   to: '/blogs/create'
})`
   height: 40px;
   padding: 0 15px;
   border-radius: var(--br-radius);
   box-shadow: var(--shadow);
   font-weight: var(--fw-semiBold);
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex: 0 1 110px;

   &:active { 
      background-color: var(--color-categories);
      color: var(--color-white); 
   }


   @media(min-width: 768px){
      transition: all 0.5s ease;
      &:hover{
         background-color: var(--color-categories);
         color: var(--color-white); 
      }
   }

`

export const BlogsWrapper = styled.div`
   display: flex;
   flex-direction: column; 
   align-items: center;
`

