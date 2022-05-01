import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CuisineEl = styled(motion.section)``

export const CuisineTitle = styled.h2`
    margin: 0 0 10px 0;
    font-size: var(--fs-bg);
`

export const CuisineWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 2rem;
`
