import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

export const HeaderFunctionality = styled.nav``

export const HeaderList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
`

export const HeaderItem = styled.li`
    &:not(:last-child) {
        margin-right: 15px;
    }

    @media (hover: hover) {
        transition: all 0.5s ease;
        &:hover {
            transform: translateY(-5px);
        }
    }
`

export const HeaderFavorites = styled(Link)`
    height: 100%;
    width: 100%;
    position: relative;
`

export const HeaderFavoritesImage = styled.img`
    cursor: pointer;
    width: 30px;
    height: 30px;
    object-fit: cover;
`

export const HeaderFavoritesCount = styled.span`
    position: absolute;
    bottom: -2px;
    font-size: var(--fs-sl);
    right: -5px;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: var(--color-white);
    box-shadow: var(--shadow);
    color: var(--color-categories);
    display: flex;
    align-items: center;
    justify-content: center;
`


