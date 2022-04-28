import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderEl = styled.header`
    padding: 20px 0;
`

export const HeaderLogo = styled(Link).attrs({
    to: '/'
})`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: var(--fs-bg);
    font-weight: var(--fw-bold);
`   