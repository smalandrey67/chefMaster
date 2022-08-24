import styled from 'styled-components'

import { RecipeScoreProps } from './ReacipeCard.types'

export const RecipeGradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    z-index: 5;
    border-radius: var(--br-radius);
`
export const RecipeScore = styled.span<RecipeScoreProps>`
    position: absolute;
    top: 5px;
    right: 5px;
    border: 1px solid ${props => props.healthScore <= 5 ? 'var(--color-error)' : 'var(--color-categories)'};
    color: var(--color-white); 
    font-size: var(--fs-sl);
    font-weight: var(--fw-bold);
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width: 768px){
        font-size: var(--fs-sm);
        height: 30px;
        width: 30px;
        top: 10px;
        right: 10px;
    }
`