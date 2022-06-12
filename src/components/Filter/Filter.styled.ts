import styled, { css } from 'styled-components'
import { Button } from '../../assets/styled/Reused.styled'

type FilterElProps = {
   isFilterOpen: boolean
}

type FilterOptionProps = {
   isFilterOpen: boolean
   active: boolean
}


export const FilterEl = styled.div<FilterElProps>`
   width: 100%;
   position: absolute;
   top: 55px;
   left: 0;
   border-radius: var(--br-radius);
   background-color: var(--color-white);
   box-shadow: var(--shadow);
   transition: all 0.5s ease;
   z-index: 500;

   ${(props) => {
      switch (props.isFilterOpen) {
         case true:
            return css`
               min-height: 100px;
               opacity: 1;
               visibility: visible;
            `
         default:
            return css`
               min-height: 0;
               opacity: 0;
               visibility: hidden;
            `
      }
   }}

`

export const FilterBody = styled.div`
   padding: 10px;
`

export const FilterWrapper = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
`

export const FilterOption = styled(Button)<FilterOptionProps>`
   transition: all 0.5s ease;
   margin: 3px;
   flex: 0 1 46%;

   background-color: ${({ active }) => active ? 'var(--color-categories)': 'var(--color-white)'};
   color: ${({ active }) => active ? 'var(--color-white)' : 'var(--color-black)'};

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


   @media (min-width: 410px) {
      flex: 0 1 30.333%;
   }

   ${(props) => {
      switch (props.isFilterOpen) {
         case true:
            return css`
               height: 40px;
               opacity: 1;
               visibility: visible;
            `
         default:
            return css`
               height: 0;
               opacity: 0;
               visibility: hidden;
            `
      }
   }}
`