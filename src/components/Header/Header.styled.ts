import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderEl = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 20px;
    background-color: var(--color-white);
    border-bottom-left-radius: var(--br-radius);
    border-bottom-right-radius: var(--br-radius);
    z-index: 100;

    @media(min-width: 768px){
        position: static;
    }
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;
`

export const HeaderBlogsWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderLogo = styled(Link).attrs({
    to: '/'
})`
    margin-left: 5px; 
    font-size: var(--fs-bg);
    font-weight: var(--fw-bold);
    margin-right: 10px;
`

export const HeaderBlogs = styled(Link).attrs({
    to: '/blogs'
})`
    display: flex;
    align-items: center;
    font-size: var(--fs-md);

    animation-name: jump-blog;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    &:active{
        animation-play-state: paused;
    }

    @media (hover: hover) {
        &:hover{
            animation-play-state: paused;
        }
    }

    @keyframes jump-blog {
        0%{
            transform: scale(0.8)
        }100%{
            transform: scale(1)
        }
    }
`




