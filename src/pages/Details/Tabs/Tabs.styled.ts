import styled from 'styled-components'

export const DetailsInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;
    flex-wrap: wrap;

    @media(min-width: 375px){
        flex-wrap: nowrap;
    }

`

export const DetailsInfoButton = styled.button`
    height: 40px;
    padding: 0 15px;
    flex: 0 1 100%;
    border-radius: var(--br-radius);
    box-shadow: var(--shadow);
    font-weight: var(--fw-semiBold);

    @media(min-width: 768px){
        flex: 0 1 25%;
    }

    &:not(:last-child){
        margin: 0 0 5px 0;
    }

    @media(min-width: 375px){
        &:not(:last-child){
            margin: 0 10px 0 0;
        }   
    }

    &.active{
        background-color: var(--color-categories);
        color: var(--color-background); 
    }
`