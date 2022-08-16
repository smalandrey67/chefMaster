import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NotAuthorisationEl = styled.div``

export const NotAuthorisationContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   max-width: 380px;
   height: 380px;
   margin: 0 auto;
`

export const NotAuthorisationImage = styled.img`
   width: 100%;
`

export const NotAuthorisationTitle = styled.h4`
   font-size: var(--fs-md);
   font-weight: var(--fw-lg);
   margin: 0 0 10px 0;

`

export const NotAuthorisationLink = styled(Link)`
   color: var(--color-links);
   text-decoration: underline;
   font-size: var(--fs-md);
   font-weight: var(--fw-semiBold);
`