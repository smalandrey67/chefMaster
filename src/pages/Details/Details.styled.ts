import styled from 'styled-components'

import { Flex, Figure, Figcaption } from 'assets/styled/Reused.styled'

export const DetailsWrapper = styled(Flex)`
    flex-direction: column;
    align-items: stretch;
    
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        gap: 15px;
    } 
`

export const DetailsWrapperLeft = styled.div``

export const DetailWrapperImage = styled(Figure)`
    margin-bottom: 5px;
`

export const DetailsWrapperTitle = styled(Figcaption)`  
    @media (max-width: 768px) {
        font-size: var(--fs-md);
    }
    margin-left: 5px;
    font-size: var(--fs-bg);
    font-weight: var(--fw-semiBold);
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
    /* @media (min-width: 768px) { */
        flex: 0 1 50%;
    /* } */
`