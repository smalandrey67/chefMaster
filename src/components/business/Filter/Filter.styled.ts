import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Button } from '../../../assets/styled/Reused.styled'

export const FilterEl = styled(motion.div)`
   width: 100%;
   position: absolute;
   top: 55px;
   left: 0;
   border-radius: var(--br-radius);
   background-color: var(--color-white);
   box-shadow: var(--shadow);
   transition: all 0.5s ease;
   z-index: 100;
   overflow: auto;
   height: 303px;

   &::-webkit-scrollbar {
      width: 4px;
      border-radius: var(--br-radius);
   }

   &::-webkit-scrollbar-track {
      background: var(--color-white); 
   }

   &::-webkit-scrollbar-thumb {
      opacity: 1;
      background: var(--color-scrollbar);
   }
`

export const FilterBody = styled.div`
   padding: 10px;
`

export const FilterWrapper = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;

   &:not(:last-child) {
      margin-bottom: 5px;
   }
`

export const FilterOption = styled(motion.button)`
   font-size: var(--fs-sl);
   font-weight: var(--fw-bold);
   transition: all 0.5s ease;
   margin: 3px;
   flex: 0 1 30.333%;

   height: 40px;
   padding: 0 15px;
   border-radius: var(--br-radius);
   box-shadow: var(--shadow);
   font-weight: var(--fw-semiBold);
   background-color: var(--color-white); 
   display: flex;
   align-items: center;
   justify-content: center;

   &:active {
      background-color: var(--color-categories);
      color: var(--color-white);
   }

   @media (hover: hover) {
        transition: all 0.3s ease;
        &:hover {
            background-color: var(--color-categories);
            color: var(--color-white);
        }
    }
`

export const FilterShowResult = styled(Button)`
   margin: 0 auto;
   padding: 0 30px;
`