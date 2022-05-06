import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const Global = createGlobalStyle`
    ${normalize}

    *{
        box-sizing: border-box;
    }

    :root {
        //colors
        --color-white: #fff;
        --color-black: #000000; 
        --color-background: #eef2f3;
        --color-text: #232526;
        --color-alternative: #414345;
        --color-categories: #56ab2f;
        --color-categories-text: #f5af19;
        --color-error: #Ed213a;

        //typography
        font-family: 'Quicksand', sans-serif;
        
        --fs-sl: 11px;
        --fs-sm: 14px;
        --fs-md: 18px;
        --fs-bg: 25px;
        
        --fw-regular: 400;
        --fw-semiBold : 600;
        --fw-bold: 700;

        --br-radius: 10px;

        --shadow: rgba(-23,1,165,0.2) 0px 8px 24px;
    }
    body {
        font-family: var(--family);
        font-size: var(--fs-sm);
        background-color: var(--color-background);
        color: var(--color-alternative);
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

