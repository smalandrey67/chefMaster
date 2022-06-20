import styled from 'styled-components'

export const FavoriteCardImageWrapper = styled.div`
    margin-bottom: 5px;
    border-radius: var(--br-radius);
    overflow: hidden;
    height: 270px;

    position: relative;
`

export const FavoriteCardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const FavoriteCardTitle = styled.h3`
    position: absolute;
    bottom: 0px;
    left: 10px;

    color: var(--color-white);
`




