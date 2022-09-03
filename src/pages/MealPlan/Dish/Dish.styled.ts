import styled from 'styled-components'

export const DishEl = styled.div`
   width: 150px;
   height: 100%;
   position: relative;
   cursor: pointer;

   &:not(:last-child) {
      margin-right: 4px;
   }

   @media (hover: hover) {
         transition: all 0.5s ease;
         &:hover {
            transform: scale(0.98)
         }
   }
`
export const DishDeleteButton = styled.button`
   position: absolute;
   top: 0;
   right: 0;
   width: 30px;
   height: 30px;
   background-color: transparent;
   padding: 0;
   box-shadow: none;
`