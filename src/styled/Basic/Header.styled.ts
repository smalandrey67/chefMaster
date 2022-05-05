import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderEl = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--color-background);
    padding: 20px 0;

    @media(min-width: 768px){
        position: static;
    }
`


export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column;

    @media(min-width: 475px){
        flex-direction: row;
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
    margin-bottom: 10px;

    @media(min-width: 475px){
        margin-bottom: 0;
    } 
`   