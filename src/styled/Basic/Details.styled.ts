import styled from 'styled-components'
import { motion } from 'framer-motion'

export const DetailsEl = styled(motion.article)``

export const DetailsWrapper = styled.div`
    @media(min-width: 768px){
        display: flex;
        gap: 15px;
    } 
`

export const DetailWrapperImage = styled.div`
    margin-bottom: 10px;

    @media(min-width: 768px){
        flex: 0 1 50%;
        margin-bottom: 0;
    }
`

export const DetailsWrapperTitle = styled.h2`
    margin: 0 0 10px 0;

    @media(min-width: 768px){
        margin: 0 0 30px 0;
    }
`

export const DetailsImage = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: var(--br-radius);

`

export const DetailsInfo = styled.div`
    @media(min-width: 768px){
        flex: 0 1 50%;
    }
`

export const DetailsInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 10px 0;
`

export const DetailsInfoButton = styled.button`
    height: 40px;
    padding: 0 15px;
    border-radius: var(--br-radius);
    box-shadow: var(--shadow);
    font-weight: var(--fw-semiBold);

    &.active{
        background-color: var(--color-categories);
        color: var(--color-background); 
    }
`

export const DetailsInfoDescription = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const DetailsInfoTitle = styled.h2`
    font-size: var(--fs-md);
    font-weight: var(--fw-semiBold);
    margin: 0;

    &:not(:last-child){
        margin: 0 0 10px 0;
    }
`

export const DetailsIngredients = styled(motion.ul)`
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

    &:not(:last-child){
        margin-bottom: 2px;
    }
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








