import styled from 'styled-components';

import { $bgImgColor } from './_variables-styled';

export const CardImg = styled.img`
    object-fit: contain;
    min-height: 15rem;
    height: 20rem;
    background: ${$bgImgColor};
`;
