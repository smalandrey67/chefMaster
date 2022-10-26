import styled from 'styled-components'

import { Button, Flex } from 'assets/styled/Reused.styled'

export const DetailsInfoWrapper = styled(Flex)`
  width: 100%;
  margin: 0 0 10px 0;
  @media (max-width: 370px) {
    flex-wrap: wrap;
  }
`
export const DetailsInfoButton = styled(Button)`
  height: 40px;
  flex: 0 1 33.333%;

  &:not(:last-child) {
    margin: 0 5px 0 0;
  }
  @media (max-width: 370px) {
    flex: 0 1 100%;
    &:not(:last-child) {
      margin: 0 0 5px 0;
    }
  }
  &.active {
    background-color: var(--color-categories);
    color: var(--color-white);
  }
`
