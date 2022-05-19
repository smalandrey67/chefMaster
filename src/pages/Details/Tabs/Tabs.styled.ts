import styled from 'styled-components'
import { Button } from '../../../styled/Reused.styled'


export const DetailsInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;
    flex-wrap: wrap;

    @media(min-width: 375px){
        flex-wrap: nowrap;
    }

`

export const DetailsInfoButton = styled(Button).attrs({
    type: 'button',
    name: 'tab'
})`
    flex: 0 1 100%;
    
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
        color: var(--color-white); 
    }
`