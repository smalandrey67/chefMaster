import styled from 'styled-components'

import { List } from 'assets/styled/Reused.styled'

export const NutritionWrapper = styled(List)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media(min-width: 376px){
        justify-content: space-between;
    }
`
export const NutritionItem = styled.li`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
    font-weight: var(--fw-semiBold);
    &:not(:last-child){
        margin-right: 25px;
    }
`