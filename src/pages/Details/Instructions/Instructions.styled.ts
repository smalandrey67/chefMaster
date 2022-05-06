import styled from 'styled-components'
import { motion } from 'framer-motion'

export const DetailsInfoDescription = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const DetailsInfoTitle = styled.h2`
    font-size: var(--fs-md);
    font-weight: var(--fw-semiBold);
    margin: 0;

    &:not(:last-child){
        margin: 0 0 10px 0;
    }
`