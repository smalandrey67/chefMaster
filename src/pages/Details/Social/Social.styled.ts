import styled from 'styled-components'
import { Figcaption } from 'assets/styled/Reused.styled'

export const DetailsWrapperTitle = styled(Figcaption)`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: var(--fs-sm);
  font-weight: var(--fw-semiBold);
  color: var(--color-white);
`

export const SocialReadyMinutes = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: var(--color-white);
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 7px;
  font-weight: var(--fw-bold);
`

export const SocialAgreeLikes = styled.span`
  position: absolute;
  bottom: 11px;
  left: 90px;
  color: var(--color-white);
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 5px;
  font-weight: var(--fw-bold);
`
