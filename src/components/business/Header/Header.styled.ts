import styled from 'styled-components'
import { Link } from 'react-router-dom'

type HeaderFunctionalityProps = {
    isHamburgerMenu?: boolean
}

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

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const HeaderBlogsWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderLogo = styled(Link)`
    margin-left: 5px; 
    font-size: var(--fs-bg);
    font-weight: var(--fw-bold);
    margin-right: 10px;
`

export const HeaderBlogs = styled(Link)`
    display: flex;
    align-items: center;
    font-size: var(--fs-md);
`

export const HeaderNav = styled.nav<HeaderFunctionalityProps>`
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
        transform: ${props => props.isHamburgerMenu ? 'translateX(0)' : 'translateX(-700px)'};
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

export const HeaderLink = styled(Link)`
    font-size: var(--fs-bg);
    margin-left: 10px;
`

export const HeaderHorizontalLine = styled.div`

    @media (max-width: 768px) {
        width: 100%;
        height: 2px;
        background-color: var(--color-categories);
        position: absolute;
        bottom: 120px;
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
