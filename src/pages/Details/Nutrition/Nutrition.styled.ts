import styled from 'styled-components'

export const NutritionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media(min-width: 376px){
        justify-content: space-between;
    }
`

export const NutritionItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    gap: 5px;

    font-weight: var(--fw-semiBold);

    &:not(:last-child){
        margin-right: 10px;
    }
`

