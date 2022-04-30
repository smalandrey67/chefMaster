import styled from 'styled-components'

export const SearchLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px; 
    height: 50px;
    border-radius: var(--br-radius);
    padding: 0 20px;
    box-shadow: var(--shadow);
    width: 100%;

    @media(min-width: 475px){
        width: auto; 
    } 
`

export const SearchInput = styled.input.attrs({
    type: 'text',
    name: 'search', 
    placeholder: 'Search'
})`
    font-weight: var(--fw-bold);
    width: 100%;
    transition: all 0.5s ease;
    font-size: var(--fs-md);

    &::placeholder{
        font-weight: var(--fw-semiBold);
        color: var(--color-alternative);
    }
`
