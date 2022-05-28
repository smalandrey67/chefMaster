import styled from 'styled-components'

import { motion } from 'framer-motion'

export const PopupEl = styled(motion.div)`
   position: fixed;
   width: 100%;
   height: 100%;
   background-color: var(--color-gradient);
   top: 0;
   left: 0;
   z-index: 150;
`

export const PopupBody = styled.div`
   min-height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 30px 10px;
`

export const PopupContent = styled.div`
   background-color: var(--color-white);
   color: var(--color-text);
   width: 500px;
   padding: 10px;
   border-radius: var(--br-radius);
`