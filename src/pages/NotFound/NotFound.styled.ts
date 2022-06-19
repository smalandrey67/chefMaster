import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40vh;
` 

export const NotFoundImageWrapper = styled.div``

export const NotFoundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const NotFoundTitle = styled.h3``

export const NotFoundRedirect = styled(Link)`
    color: var(--color-categories-text);
    text-decoration: underline;
`





