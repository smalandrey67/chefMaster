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
        --color-grey: grey;
        --color-text: #232526;
        --color-alternative: #414345;
        --color-categories: #56ab2f;
        --color-categories-text: #f5af19;
        --color-error: #ed213a;
        --color-gradient: rgba(0, 0, 0, 0.8);

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

        --shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
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
    }
` 

