import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CategoriesNav = styled.nav`
  margin: 140px 0 20px 0;
  height: 45px;
  @media (min-width: 768px) {
    margin: 17px 0 20px 0;
  }
`
export const CategoriesLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-weight: var(--fw-semiBold);
  width: 50px;
  &.active {
    color: var(--color-categories-text);
  }
  @media (hover: hover) {
    transition: all 0.3s ease;
    &:hover {
      color: var(--color-categories-text);
    }
  }
`
