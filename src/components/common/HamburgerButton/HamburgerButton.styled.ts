import styled from 'styled-components'

type HamburgerProps = {
   isHamburgerMenu: boolean;
}

export const Hamburger = styled.div<HamburgerProps>`

   @media (max-width: 768px) {
      position: relative;
      width: 30px;
      height: 20px;
      z-index: 205;
      cursor: pointer;

      &::before, &::after {
         content: '';
         position: absolute;
         left: 0;
         width: 100%;
         height: 2px;
         background-color: var(--color-black);
         transition: all 0.3s ease-in-out;
         border-radius: var(--br-radius);
      }

      &::before {
         top: ${props => props.isHamburgerMenu ? '9px' : 0};
         transform: ${props => props.isHamburgerMenu ? 'rotate(45deg)' : null};
      }
   
      &::after {
         bottom: ${props => props.isHamburgerMenu ? '9px' : 0};
         transform: ${props => props.isHamburgerMenu ? 'rotate(-45deg)' : null};
      }
   }
`

export const HamburgerLine = styled.span<HamburgerProps>`
   @media (max-width: 768px) {
      position: absolute;
      left: 0;
      background-color: var(--color-black);
      width: 100%;
      height: 2px;
      top: 9px;
      border-radius: var(--br-radius);
      transition: all 0.3s ease-in-out;
      transform: ${props => props.isHamburgerMenu ? 'scale(0)' : null};
   }
`