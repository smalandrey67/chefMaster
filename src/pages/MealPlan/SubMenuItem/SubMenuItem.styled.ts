import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SubMenuItemEl = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
export const SubMenuLink = styled(Link)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 5px;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semiBold);
`
