import styled from 'styled-components'
import { Input, Button } from '../../../assets/styled/Reused.styled'

export const SearchWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 5px;
    position: relative;

    @media(min-width: 475px){
        margin-left: auto;
        width: 400px; 
    } 
`

export const SearchForm = styled.form`
    flex: 0 1 75%;
`

export const SearchLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px; 
    height: 50px;
    border-radius: var(--br-radius);
    padding: 0 20px;
    box-shadow: var(--shadow);
    background-color: var(--color-white);
    margin: 0 5px 5px 0;
`

export const SearchInput = styled(Input).attrs({
    placeholder: 'Search'
})`
    width: 100%;
    height: 90%;
    font-weight: var(--fw-bold);
`

export const SearchFilter = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 1 25%;
    height: 50px; 

    &:active {
        background-color: var(--color-categories);
        color: var(--color-white);
    }

    @media (hover: hover) {
        transition: all 0.5s ease;
        &:hover {
            background-color: var(--color-categories);
            color: var(--color-white);
        }
    } 
`
