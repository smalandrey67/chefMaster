import styled from 'styled-components'

import { Flex } from 'assets/styled/Reused.styled'
import { Link } from 'react-router-dom'

export const BlogsAdd = styled(Link)`
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
   @media (hover: hover) {
      transition: all 0.5s ease;
      &:hover{
         background-color: var(--color-categories);
         color: var(--color-white); 
      }
   }
`
export const BlogsWrapper = styled(Flex)`
   flex-direction: column; 
`