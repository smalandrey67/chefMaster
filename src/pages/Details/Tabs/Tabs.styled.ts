import styled from 'styled-components'
import { Button } from '../../../assets/styled/Reused.styled'


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

    &:not(:last-child){
        margin: 0 7px 0px 0;
    }

    &.active{
        background-color: var(--color-categories);
        color: var(--color-white); 
    }
`