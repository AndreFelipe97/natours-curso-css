import styled from 'styled-components';
import { moveInBottom } from '../../styles/animations';
import { Hero } from '../../assets/img';



export const Header = styled.header`
    height: 95vh;
    background-image: linear-gradient(to right bottom,
        rgba(126, 213, 111, .8),
        rgba(40, 180, 131, .8)),
        url(${Hero});
    background-size: cover;
    background-position: top;
    position: relative;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

    @media only screen and (max-width: 37.5em) {
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
    }
`;

export const LogoBox = styled.header`
    position: absolute;
    top: 4rem;
    left: 4rem;
`;

export const Logo = styled.img`
    height: 3.5rem;
`;


export const TextBox = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const ButtonWhite = styled.a`
    background-color: var(--color-white) !important;
    color: var(--grey-dark);
    animation: ${moveInBottom} .5s ease-out .75s;
    animation-fill-mode: backwards;

    &:link, &:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 100px;
        transition: all .2s;
        position: relative;
        font-size: var(--default-font-size);
    }

    &:hover {
        transform: translateY(-.3rem);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, .2);
    }

    &:active {
        transform: translateY(-1px);
        box-shadow: rgba(0 .5rem 1rem, rgba(0, 0, 0, .2));
    }

    &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }

    .btn-white::after {
        background-color: var(--color-white);
    }

    .btn-white:hover::after {
        transform: scale(1.5);
        opacity: 0;
    }
`;
