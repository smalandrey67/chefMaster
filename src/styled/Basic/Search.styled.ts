import styled from 'styled-components'

export const SearchLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px; 

    height: 50px;
    border-radius: var(--br-radius);
    padding: 0 20px;
    box-shadow: var(--shadow);
    
    @media(max-width: 460px){
        width: 100%; 
    } 
`

export const SearchInput = styled.input.attrs({
    type: 'text',
    name: 'search', 
    placeholder: 'Search'
})`
    font-weight: var(--fw-bold);
    width: 100%;
    color: var(--color-text);
    transition: all 0.5s ease;

    &::placeholder{
        font-weight: var(--fw-semiBold);
        color: var(--color-alternative);
    }
`
