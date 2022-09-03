import styled from 'styled-components'

import { Flex } from 'assets/styled/Reused.styled'
import { HeaderNavProps, HamburgerProps } from './Header.types'

export const HeaderEl = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 20px;
    background-color: var(--color-white);
    border-bottom-left-radius: var(--br-radius);
    border-bottom-right-radius: var(--br-radius);
    z-index: 100;
    
    @media(min-width: 768px){
        position: static;
    }
`
export const HeaderWrapper = styled(Flex)`
    justify-content: space-between;
    margin-bottom: 10px;
`
export const HeaderLogoWrapper = styled(Flex)`
    justify-content: space-between;
`
export const HeaderNav = styled.nav<HeaderNavProps>`
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
    }
    @media (max-width: 768px) {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: var(--color-white);
        z-index: 200;
        padding: 50px 20px 0 20px;
        transition: all 0.5s ease;
        overflow: hidden;
        transform: ${props => props.isHamburgerMenu ? 'translateX(0)' : 'translateX(-900px)'};
    }
`
export const HeaderList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    
    @media (min-width: 768px) {
        align-items: center;
        flex-direction: row;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
export const HeaderItem = styled.li`
    display: flex;
    align-items: center;
    
    @media (min-width: 768px) {
        &:not(:last-child) {
            margin-right: 20px;
        }
    }
    @media (max-width: 768px) {
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }
    @media (hover: hover) {
        transition: all 0.5s ease;
        &:hover {
            transform: translateY(-5px);
        }
    }
`
export const HeaderItemProfile = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 0 0 20px;

    @media (min-width: 768px) {
        padding: 0;
        margin-right: 10px;
    }
    @media (hover: hover) {
        transition: all 0.5s ease;
        &:hover {
            transform: translateY(-5px);
        }
    }
`
export const HeaderHorizontalLine = styled.div`
    @media (min-width: 768px) {
        margin-left: 20px;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 2px;
        background-color: var(--color-categories);
        position: absolute;
        bottom: 170px;
        left: 0;
    }
`
export const HeaderVerticalLine = styled.div`
    
    @media (max-width: 768px) {
        width: 2px;
        height: 100%;
        background-color: var(--color-categories);
        position: absolute;
        bottom: 0;
        right: 65px;
    }
`
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