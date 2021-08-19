import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container {
        padding-top: 15px;
        min-height: 100vh;
        height: 100%;
    }
    body {
       background: linear-gradient(to bottom left, #FFFFFF, #3D5F6F);
    }
`;
