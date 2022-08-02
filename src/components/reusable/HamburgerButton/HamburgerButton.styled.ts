import styled from 'styled-components'

type HamburgerProps = {
   isHamburgerMenu: boolean;
}

export const Hamburger = styled.div<HamburgerProps>`

   @media (max-width: 768px) {
      position: relative;
      z-index: 205;
      width: 30px;
      height: 3px;
      background-color: var(--color-black);
      border-radius: var(--br-radius);
      box-shadow: var(--shadow);
      transition: all 0.5s ease-in-out;
      cursor: pointer;
      background-color: ${props => props.isHamburgerMenu ? 'transparent': null};
   
      &::before, &::after {
         content: '';
         position: absolute;
         width: 30px;
         height: 3px;
         background-color: var(--color-black);
         transition: all 0.5s ease-in-out;
      }
   
      &::before {
         transform: translateY(-8px);
         transform: ${props => props.isHamburgerMenu ? 'rotate(45deg) translate(0px, 0px)' : null};
      }
   
      &::after {
         transform: translateY(8px);
         transform: ${props => props.isHamburgerMenu ? 'rotate(-45deg) translate(0px, 0px)' : null};
      }
   }
`