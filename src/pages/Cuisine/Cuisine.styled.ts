import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CuisineEl = styled(motion.section)``

export const CuisineWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 2rem;
`
