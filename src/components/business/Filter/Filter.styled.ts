import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Button, Flex } from 'assets/styled/Reused.styled'

export const FilterEl = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 55px;
  left: 0;
  border-radius: var(--br-radius);
  background-color: var(--color-white);
  box-shadow: var(--shadow);
  transition: all 0.5s ease;
  z-index: 100;
  overflow: auto;
  height: 303px;
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: var(--br-radius);
  }
  &::-webkit-scrollbar-track {
    background: var(--color-white);
  }
  &::-webkit-scrollbar-thumb {
    opacity: 1;
    background: var(--color-scrollbar);
  }
`

export const FilterBody = styled.div`
  padding: 10px;
`

export const FilterWrapper = styled(Flex)`
  flex-wrap: wrap;
  justify-content: flex-start;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`

export const FilterOption = styled(Button)`
  font-size: var(--fs-sl);
  font-weight: var(--fw-bold);
  transition: all 0.5s ease;
  margin: 3px;
  flex: 0 1 30.333%;
  height: 40px;

  &:active {
    background-color: var(--color-categories);
    color: var(--color-white);
  }
`

export const FilterShowResult = styled(Button)`
  height: 40px;
`
