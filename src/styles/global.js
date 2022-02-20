import {createGlobalStyle, css} from 'styled-components';
import { ClearFix } from './mixins';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #55c57a;
        --color-primary-light: #7ed56f; 
        --color-primary-dark: #28b852;
        --color-grey-dark: #777;
        --color-white: #FFF;
        --color-black: #000;
        --color-grey-light-1: #F7F7F7;
        --color-grey-light-2: #EEE;

        --color-secondary-light: #ffb900;
        --color-secondary-dark: #ff7730;
        --color-tertiary-light: #2998ff;
        --color-tertiary-dark: #5643fa;

        --default-font-size: 1.6rem;

        --grid-width: 114rem;
        --gutter-vertical: 8rem;
        --gutter-horizontal: 6rem;
    }
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-size: var(--default-font-size);
        line-height: 1.7;
        color: var(--color-grey-dark);
        padding: 3rem;
        box-sizing: border-box;
    }

    .row {
        max-width: var(--grid-width);
        margin: 0 auto;

        &:not(:last-child) {
            margin-bottom: var(--gutter-vertical);
        }

        ${ClearFix}

        [class^="col-"] {
            float: left;

            &:not(:last-child) {
                margin-right: var(--gutter-horizontal);
            }
        }

        .col-1-of-2 {
            width: calc((100% - var(--gutter-horizontal)) / 2);
        }

        .col-1-of-3 {
            width: calc((100% - 2 * var(--gutter-horizontal)) / 3);
        }

        .col-2-of-3 {
            width: calc(2 * ((100% - 2 * var(--gutter-horizontal)) / 3) + var(--gutter-horizontal));
        }

        .col-1-of-4 {
            width: calc((100% - 3 * var(--gutter-horizontal)) / 4);
        }

        .col-2-of-4 {
            width: calc(2 * ((100% - 3 * var(--gutter-horizontal)) / 4) + var(--gutter-horizontal));
        }

        .col-3-of-4 {
            width: calc(3 * ((100% - 3 * var(--gutter-horizontal)) / 4) + 2 * var(--gutter-horizontal));
        }
    }
`;

export default GlobalStyle;