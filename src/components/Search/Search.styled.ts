import styled from 'styled-components'
import { Input } from '../../styled/Reused.styled'


export const SearchWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const SearchForm = styled.form`
    width: 100%;

    @media(min-width: 475px){
        width: 300px; 
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
    margin-bottom: 5px;
`

export const SearchInput = styled(Input)`
    width: 100%;
    font-weight: var(--fw-bold);
`
