import styled from 'styled-components';

import { $shadowColor } from './_variables-styled';

export const CardHolder = styled.div`
    transition: all 500ms ease;
    &:hover {
        box-shadow: ${$shadowColor};
        cursor: pointer;
        transform: translate(0, -5px);
    }
`;
