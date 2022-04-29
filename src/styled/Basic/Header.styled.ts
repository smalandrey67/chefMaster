import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderEl = styled.header`
    padding: 20px 0;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media(max-width: 475px){
        flex-direction: column;
        align-items: center;
    }
`

export const HeaderLogo = styled(Link).attrs({
    to: '/'
})`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: var(--fs-bg);
    font-weight: var(--fw-bold);

    @media(max-width: 475px){
        margin-bottom: 10px;
    } 
`   