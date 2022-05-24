import styled from 'styled-components'
import { motion } from 'framer-motion'

export const DetailsList = styled(motion.ul)`
    margin: 0;
    padding: 0;
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

export const DetailsIngredientsImage = styled.img`
    height: 100%;
    width: 100px;
    object-fit: contain;
    border-radius: var(--br-radius);
    margin-right: 5px;
`

export const DetailsIngredientsTitle = styled.p`
    margin: 0;
    flex: 1 1 auto;
`

export const DetailsIngredientsUnit = styled.p`
    font-size: var(--fs-sm);
    margin: 0;
`

export const DetailsIngredientsUnitSpan = styled.span`
    margin-right: 5px;
`