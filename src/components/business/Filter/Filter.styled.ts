import styled, { css } from 'styled-components'
import { Button } from '../../../assets/styled/Reused.styled'

type FilterElProps = {
   isFilterMenuOpen: boolean;
}

type FilterOptionProps = {
   isFilterMenuOpen: boolean;
   active: boolean;
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
   z-index: 100;
   overflow: auto;

   ${props => {
      switch (props.isFilterMenuOpen) {
         case true:
            return css`
               height: 303px;
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

export const FilterOption = styled(Button) <FilterOptionProps>`
   font-size: var(--fs-sl);
   font-weight: var(--fw-bold);
   transition: all 0.5s ease;
   margin: 3px;
   flex: 0 1 30.333%;

   background-color: ${props => props.active ? 'var(--color-categories)' : 'var(--color-white)'};
   color: ${props => props.active ? 'var(--color-white)' : 'var(--color-black)'};

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

   ${(props) => {
      switch (props.isFilterMenuOpen) {
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

export const FilterShowResult = styled(Button)`
   margin: 0 auto;
   padding: 0 30px;
`