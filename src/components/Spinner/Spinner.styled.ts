import styled from "styled-components"


export const SpinnerTop = styled.div`
    width: 118px;
    height: 118px;
    display: inline-block;
    overflow: hidden;
    background: none;
`

export const SpinnerMain = styled.div`
    @keyframes ldio-vo0hx27dgl {
        0% { transform: translate(-50%,-50%) rotate(0deg); }
        100% { transform: translate(-50%,-50%) rotate(360deg); }
    }
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
`

export const SpinnerFooter = styled.div`
    position: absolute;
    width: 70.8px;
    height: 70.8px;
    border: 11.799999999999999px solid #85a2b6;
    border-top-color: transparent;
    border-radius: 50%;
    animation: ldio-vo0hx27dgl 1s linear infinite;
    top: 59px;
    left: 59px;
    box-sizing: content-box;
`