import styled from 'styled-components'
import { motion } from 'framer-motion'


//==================Details======================//
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
    display: flex;
    align-items: center;

    @media(min-width: 768px){
        margin: 0 0 30px 0;
    }
`

export const DetailsWrapperTime = styled.span`
    font-size: var(--fs-sl);
    margin-left: 5px;
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




















