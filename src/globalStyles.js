import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face{
        font-family: 'josefinsans-bold';
        src: url(/assets/fonts/JosefinSans-Bold.ttf);
    }

    @font-face{
        font-family: 'josefinsans-regular';
        src: url(/assets/fonts/JosefinSans-Regular.ttf);
    }

    @font-face{
        font-family: 'josefinsans-semibold';
        src: url(/assets/fonts/JosefinSans-SemiBold.ttf);
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
        max-width: 100vw;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    *{
        color: #323232;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-size: 1rem;
    }

    *::-webkit-scrollbar{
        background-color: #f0f0f076;
        height: .6rem;
    }

    *::-webkit-scrollbar-thumb{
        background-color: #f0f0f076;
        backdrop-filter: blur(4px);   
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'josefinsans-bold';
    }

    button{
        background-color: inherit;
        border: none;
        width: fit-content;
        height: fit-content;
    }

    .subtitle{
        font-family: 'josefinsans-semibold';
    }

    .rl{
        position: relative;
    }

    .ab{
        position: absolute;
    }

    .z1{
        z-index: 1;
    }

    .z2{
        z-index: 2;
    }

    .w100{
        width: 100%;
    }
`;

export default GlobalStyles;