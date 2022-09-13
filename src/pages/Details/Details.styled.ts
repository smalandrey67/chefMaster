import styled from 'styled-components'

import { Flex, Figure } from 'assets/styled/Reused.styled'

export const DetailsWrapper = styled(Flex)`
    flex-direction: column;
    align-items: stretch;
    
    @media (min-width: 1080px) {
        flex-direction: row;
        align-items: flex-start;
        gap: 15px;
    } 
`

export const DetailsWrapperLeft = styled.div``

export const DetailWrapperImage = styled(Figure)`
    margin-bottom: 5px;
`

export const DetailsOverImage = styled.div`
    position: relative;
    border-radius: var(--br-radius);
    overflow: hidden;
`

export const DetailsImage = styled.img`
    width: 100%;
    object-fit: cover;
`

export const DetailsInfo = styled.div`
    flex: 0 1 50%;
`

export const DetailsHeartButton = styled.button`
    background: none;
    cursor: pointer;
    position: relative;
    top: 8px;

    @media (hover: hover) {
        transition: all 0.5s ease;
        
        &:hover {
            transform: scale(0.9);
        }
    }
`