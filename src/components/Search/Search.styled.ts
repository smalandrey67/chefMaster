import styled from 'styled-components'
import { Input } from '../../styled/Reused.styled'


export const SearchForm = styled.form`
    width: 100%;

    @media(min-width: 475px){
        width: auto; 
    } 
`

export const SearchLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px; 
    height: 50px;
    border-radius: var(--br-radius);
    padding: 0 20px;
    box-shadow: var(--shadow);
 
    background-color: var(--color-background);
`

export const SearchInput = styled(Input).attrs({
    type: 'text',
    name: 'search', 
    placeholder: 'Search',
})`
    width: 100%;
    font-weight: var(--fw-bold);
`
