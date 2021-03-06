import styled from 'styled-components'
import { motion } from 'framer-motion'

export const DetailsEl = styled(motion.article)``

export const DetailsWrapper = styled.div`
    @media(min-width: 768px){
        display: flex;
        gap: 15px;
    } 
`

export const DetailsWrapperLeft = styled.div``

export const DetailWrapperImage = styled.figure`
    margin: 0 0 5px 0;

    @media(min-width: 768px){
        flex: 0 1 50%;
        margin-bottom: 0;
    }
`

export const DetailsWrapperTitle = styled.figcaption`  
    margin-left: 5px;
    font-size: var(--fs-bg);
    font-weight: var(--fw-semiBold);
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
    @media(min-width: 768px){
        flex: 0 1 50%;
    }
`




















