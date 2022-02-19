import {css} from 'styled-components';

export const ClearFix = css`
    &::after {
        content: "";
        display: table;
        clear: both;
    }
`;