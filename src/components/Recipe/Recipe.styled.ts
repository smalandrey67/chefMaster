import styled from 'styled-components'

type RecipeProps = {
    healthScore: number;
}

export const RecipeEl = styled.article`
    cursor: pointer;
`

export const RecipeBody = styled.div`
    position: relative;

`

export const RecipeWrapper = styled.div`
    border-radius: var(--br-radius);
    overflow: hidden;
`

export const RecipeImage = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: var(--br-radius);
`

export const RecipeTitle = styled.h3`
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    width: 100%;
    text-align: center;
    color: var(--color-background);
    font-size: var(--fs-sm);
    margin: 0 0 15px 0;
    display: none;

    @media(min-width: 768px){
        display: block;
    } 
`

export const RecipeGradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    z-index: 5;
    border-radius: var(--br-radius);
    background: linear-gradient(rgba(0, 0, 0, 0), var(--color-gradient));
`

export const RecipeScore = styled.span<RecipeProps>`
    position: absolute;
    top: 5px;
    right: 5px;
    border: 1px solid ${({ healthScore }) => healthScore <= 5 ? 'var(--color-error)' : 'var(--color-categories)'};
    color: var(--color-background); 
    font-size: var(--fs-sl);
    font-weight: var(--fw-bold);
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(min-width: 768px){
        font-size: var(--fs-sm);
        height: 25px;
        width: 25px;
        top: 10px;
        right: 10px;
    }
`
