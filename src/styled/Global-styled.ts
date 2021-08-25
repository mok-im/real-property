import { createGlobalStyle } from 'styled-components';

import { $bgMainColor } from './_variables-styled';

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
       background: ${$bgMainColor};
    }
`;
