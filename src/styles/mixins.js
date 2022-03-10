import {css} from 'styled-components';

export const ClearFix = css`
    &::after {
        content: "";
        display: table;
        clear: both;
    }
`;

export const AbsCenter = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;


// MEDIA QUERY MANAGER

/*
    0px - 600px - Phone
    600px - 900px - Tablet portrait
    900px - 1200px - Tablet landscape
    1200px - 1800px - Normal style
    1800px - > - Big desktop
*/

export const Respond = (breakpoint, fontSize, padding = '3rem') => {
    if (breakpoint === 'phone') {
        return css`
            @media only screen and (max-width: 37.5em) {
                font-size: ${fontSize};
                padding: ${padding};
            }
        `;
    }
    
    if (breakpoint === 'tab-port') {
        return css`
            @media only screen and (max-width: 56.25em)  {
                font-size: ${fontSize};
                padding: ${padding};
            }
        `;
    }

    if (breakpoint === 'tab-land') {
        return css`
            @media only screen and (max-width: 75em)  {
                font-size: ${fontSize};
                padding: ${padding};
            }
        `;
    }

    if (breakpoint === 'big-desktop') {
        return css`
            @media only screen and (min-width: 112.5em) {
                font-size: ${fontSize};
                padding: ${padding};
            }
        `;
    }
    
};

export const RespondPhone = (fontSize) => (css`
    @media (max-width: 600px) {
        font-size: ${fontSize};
    }
`);
