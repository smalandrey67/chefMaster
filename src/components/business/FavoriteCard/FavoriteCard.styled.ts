import styled from 'styled-components'

import { FavoriteCardImageWrapperProps } from './FavoriteCard.types'

export const FavoriteCardImageWrapper = styled.div<FavoriteCardImageWrapperProps>`
    margin-bottom: 5px;
    border-radius: var(--br-radius);
    overflow: hidden;
    height: 270px;
    position: relative;
    opacity: ${props => props.isExist ? '0.6' : '1'};
`

export const FavoriteCardTitle = styled.h3`
    position: absolute;
    bottom: 0px;
    left: 10px;

    color: var(--color-white);
`

