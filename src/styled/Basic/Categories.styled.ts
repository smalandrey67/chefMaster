import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CategoriesNav = styled.nav`
    margin-bottom: 10px;
`

export const CategoriesList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
`

export const CategoriesItem = styled.li`
    flex: 0 1 25%;
    cursor: pointer;
`

export const CategoriesLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-weight: var(--fw-semiBold);
    transition: all 0.3s ease;

    &.active{
        color: var(--color-categories-text);
    }

    @media(min-width: 768px){
        &:hover{
            color: var(--color-categories-text);
        }
    }
`


