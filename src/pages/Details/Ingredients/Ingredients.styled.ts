import styled from 'styled-components'

import { Paragraph } from 'assets/styled/Reused.styled'

export const DetailsIngredientsCount = styled.span`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;
    color: var(--color-grey);
    font-weight: var(--fw-semiBold);
`
export const DetailsIngredientsItem = styled.li`
    display: flex;
    align-items: center;
    height: 100px;
    padding: 5px;
    font-size: var(--fs-md);
    font-weight: var(--fw-semiBold);
    box-shadow: var(--shadow);
    border-radius: var(--br-radius);
    background-color: var(--color-white);
    margin-bottom: 4px;
`
export const DetailsIngredientsTitle = styled(Paragraph)`
    margin: 0 10px;
    flex: 1 1 auto;
`
export const DetailsIngredientsUnit = styled(Paragraph)`
    font-size: var(--fs-sm);
`