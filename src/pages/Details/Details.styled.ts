import styled from 'styled-components'
import { motion } from 'framer-motion'

export const DetailsEl = styled(motion.article)``

export const DetailsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const DetailsWrapperLeft = styled.div`
    width: 70%;

    @media (max-width: 768px) {
        width: 100%
    }
    
`

export const DetailWrapperImage = styled.figure`
    margin: 0 0 5px 0;

    @media (min-width: 768px) {
        width: 100%;
        margin-bottom: 0;
    }
`

export const DetailsWrapperTitle = styled.figcaption`  
    margin-left: 10px;

    font-size: var(--fs-md);
    font-weight: var(--fw-semiBold);

    @media (min-width: 768px) {
        font-size: var(--fs-bg);
    }
`

export const DetailsOverImage = styled.div`
    position: relative;
`

export const DetailsImage = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: var(--br-radius);
`

export const DetailsInfo = styled.div`
    @media (min-width: 768px) {
        flex: 0 1 530px;
    }
`




















