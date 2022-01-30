import styled, { keyframes } from 'styled-components';
import heroImage from '../../assets/img/hero.jpg'

// =+=+=+=+=+=+Animtions=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+

const moveInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

const moveInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(10rem);
    }
    80% {
        transform: translateX(-1rem);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

const moveInBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(10rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+

export const Header = styled.header`
    height: 95vh;
    background-image: linear-gradient(to right bottom,
        rgba(126, 213, 111, .8),
        rgba(40, 180, 131, .8)),
        url(${heroImage});
    background-size: cover;
    background-position: top;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
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

export const HeadingPrimary = styled.h1`
    color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 6rem;

    span.heding-primary-main {
        display: block;
        font-size: 6rem;
        font-weight: 400;
        letter-spacing: 3.5rem;
        animation: ${moveInLeft} 1s;
    }

    span.heding-primary-sub {
        display: block;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 1.7rem;
        animation: ${moveInRight} 1s;
    }
`;

export const ButtonWhite = styled.a`
    background-color: #fff !important;
    color: #777;
    animation: ${moveInBottom} .5s ease-out .75s;
    animation-fill-mode: backwards;

    &:link, &:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        font-size: 1.6rem;
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
        background-color: #fff;
    }

    .btn-white:hover::after {
        transform: scale(1.5);
        opacity: 0;
    }
`;
