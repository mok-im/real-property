import styled from 'styled-components';

export const CardHolder = styled.div`
    transition: all 500ms ease;
    &:hover {
        box-shadow: 0px 12px 30px 1px rgba(34, 60, 80, 0.25);
        cursor: pointer;
        transform: translate(0, -5px);
    }
`;
