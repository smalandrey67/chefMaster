import styled from 'styled-components'

export const SearchBody = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media(max-width: 460px){
        width: 100%; 
    } 
`

export const SearchInput = styled.input.attrs({
    type: 'text',
    name: 'search', 
    placeholder: 'Search'
})`
    height: 30px;
    width: 100%;
    padding: 0 20px;
    border: 1px solid var(--color-text);
    border-radius: var(--br-radius);
    color: var(--color-text);
    margin-left: 5px;
    transition: all 0.5s ease;

    &::placeholder{
        color: var(--color-text);
    }
`
