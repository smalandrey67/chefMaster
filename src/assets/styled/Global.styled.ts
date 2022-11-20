import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import '@splidejs/splide/dist/css/splide.min.css'

import QuicksandRegularWoff2 from '../fonts/Quicksand-Regular.woff2'
import QuicksandRegularWoff from '../fonts/Quicksand-Regular.woff'
import QuicksandSemiBoldWoff2 from '../fonts/Quicksand-SemiBold.woff2'
import QuicksandSemiBoldWoff from '../fonts/Quicksand-SemiBold.woff'
import QuicksandBoldWoff2 from '../fonts/Quicksand-Bold.woff2'
import QuicksandBoldWoff from '../fonts/Quicksand-Bold.woff'

export const Global = createGlobalStyle`
    ${normalize}

    @font-face {
        font-family: 'Quicksand';
        src: local('Quicksand'), local('Quicksand'),
        url(${QuicksandRegularWoff2}) format('woff2'),
        url(${QuicksandRegularWoff}) format('woff');
        font-weight: 400;
        font-display: swap;
        font-style: normal;
    }

    @font-face {
        font-family: 'Quicksand';
        src: local('Quicksand'), local('Quicksand'),
        url(${QuicksandSemiBoldWoff2}) format('woff2'),
        url(${QuicksandSemiBoldWoff}) format('woff');
        font-weight: 600;
        font-display: swap;
        font-style: normal;
    }

    @font-face {
        font-family: 'Quicksand';
        src: local('Quicksand'), local('Quicksand'),
        url(${QuicksandBoldWoff2}) format('woff2'),
        url(${QuicksandBoldWoff}) format('woff');
        font-weight: 700;
        font-display: swap;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
    }

    :root {
        // #colors
        --color-white: #fff;
        --color-black: #000000; 
        --color-grey: grey;
        --color-text: #232526;
        --color-alternative: #414345;
        --color-scrollbar: #aba9a9; 
        --color-categories: #56ab2f;
        --color-categories-text: #f5af19;
        --color-error: #ed213a;
        --color-links: #1f1cd4;
        --color-gradient: rgba(0, 0, 0, 0.8);

        // #font
        font-family: 'Quicksand', sans-serif;
        
        // #font size
        --fs-sl: 11px;
        --fs-sm: 14px;
        --fs-md: 18px;
        --fs-bg: 25px;
        
        // #font weight
        --fw-regular: 400;
        --fw-semiBold : 600;
        --fw-bold: 700;

        // #border radius
        --br-radius: 10px;
        --br-radius-full: 50%;

        // #shadows
        --shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        --shadow-alternative: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
    body {
        font-family: var(--family);
        font-size: var(--fs-sm);
        background-color: var(--color-white);
        color: var(--color-text);
        position: relative;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        background-color: none;
        outline: none;
    }

    input {
        border: none;
        background-color: transparent;
        outline: none;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`
