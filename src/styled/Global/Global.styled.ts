import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const Global = createGlobalStyle`
    ${normalize}

    *{
        box-sizing: border-box;
    }

    :root {
        //colors
        --color-black: #000000;
        --color-background: #8e9eab;
        --color-text: #eef2f3; 

        //typography
        font-family: 'Quicksand', sans-serif;
        
        --fs-sm: 14px;
        --fs-md: 18px;
        --fs-bg: 25px;
        
        --fw-regular: 400;
        --fw-semiBold : 600;
        --fw-bold: 700;

        --br-radius: 10px;
    }
    body {
        font-family: var(--family);
        font-size: var(--fs-sm);
        background-color: var(--color-background);
        color: var(--color-text);
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
    }
` 