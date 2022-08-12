import styled from 'styled-components'

type RecipeCuisineImageWrapperProps = { 
    isExist: boolean | undefined;
}

export const RecipeCuisineImageWrapper = styled.div<RecipeCuisineImageWrapperProps>`
    margin-bottom: 5px;
    border-radius: var(--br-radius);
    overflow: hidden;
    height: 270px;
    opacity: ${props => props.isExist ? '0.6' : '1'};
`