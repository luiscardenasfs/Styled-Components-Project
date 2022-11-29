import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,200&display=swap');

    *{
        box-sizing: border-box;
    }

    body {
        background: #fff;
        color:  hsl(192 ,100%, 9%);
        font-family: 'RobotoMono', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }
    
    p {
        opacity: 0.6;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }
    `
    export default GlobalStyle