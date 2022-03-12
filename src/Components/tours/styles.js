import styled from "styled-components";
import { Nat5, Nat6, Nat7 } from '../../assets/img';

export const SectionTours = styled.section`
  background-color: var(--color-grey-light-1);
  padding: 25rem 0 15rem 0;
  margin-top: -10rem;

  @media only screen and (max-width: 56.25em)  {
    padding: 20rem 0 10rem 0;
  }
`;

export const Card = styled.div`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;

  .card__side {
    background-color: orangered;
    color: var(--color-white);
    font-size: 2rem;
    height: 50rem;
    transition: all .8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);
  }

  .card__side--front {
    background-color: var(--color-white);
  }

  .card__side--back {
    background-image: linear-gradient(to right bottom,
      ${props => props.card === 'primary' ? '#7ed56f' : props.card === 'secondary' ? '#ffb900' : '#2998ff'},
      ${props => props.card === 'primary' ? '#28b852' : props.card === 'secondary' ? '#ff7730' : '#5643fa'});
    transform: rotateY(180deg);
  }


  &:hover .card__side--front {
    transform: rotateY(-180deg);
  }

  &:hover .card__side--back {
    transform: rotateY(0);
  }

  @media only screen and (max-width: 56.25em)  {
    height: auto;
    border-radius: 3px;
    background-color: var(--color-white);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);

    .card__side {
      height: auto;
      position: relative;
      box-shadow: none;
    }

    .card__side--back {
      transform: rotateY(0);
      clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
    }


    &:hover .card__side--front {
      transform: rotateY(0);
    }
  }
`;

export const CardPicture = styled.div`
  background-size: cover;
  height: 23rem;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0  100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0  100%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  background-image: linear-gradient(to right bottom,
      ${props => props.card === 'primary' ? '#7ed56f' : props.card === 'secondary' ? '#ffb900' : '#2998ff'},
      ${props => props.card === 'primary' ? '#28b852' : props.card === 'secondary' ? '#ff7730' : '#5643fa'}),
      url(${props => props.card === 'primary' ? Nat6 : props.card === 'secondary' ? Nat5 : Nat7});
`;

export const CardHeading = styled.h4`
  font-size: 2.8rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: right;
  color: var(--color-white);
  position: absolute;
  top: 12rem;
  right: 2rem;
  width: 75%;

  span {
    padding: 1rem 1.5rem;
    -webkit-decoration-break: clone;
    box-decoration-break: clone;
    background-image: linear-gradient(to right bottom,
      ${props => props.card === 'primary' ? 'rgba(126, 213, 111, .85)' : props.card === 'secondary' ? 'rgba(255, 185, 0, .85)' : 'rgba(41, 152, 255, .85)'},
      ${props => props.card === 'primary' ? 'rgba(40, 180, 131, .85)' : props.card === 'secondary' ? 'rgba(255, 119, 48, .85)' : 'rgba(86, 67, 250, .85)'});
  }
`;

export const CardDetails = styled.div`
  padding: 3rem;

  @media only screen and (max-width: 56.25em)  {
    padding: 1rem 3rem;
  }

  ul {
    list-style: none;
    width: 80%;
    color: var(--color-grey-dark-1);
    margin: 0 auto;

    li {
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;

      &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-light-2);
      }
    }
  }
`;

export const CardCta = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;

  @media only screen and (max-width: 56.25em)  {
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0);
    width: 100%;
    padding: 7rem 4rem 4rem 4rem;
  }
`;

export const PriceBox = styled.div`
  margin-bottom: 8rem;

  @media only screen and (max-width: 56.25em)  {
    margin-bottom: 3rem;
  }
`;

export const PriceOnly = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
`;

export const PriceValue = styled.p`
  font-size: 6rem;
  font-weight: 100;

  @media only screen and (max-width: 56.25em)  {
    font-size: 4rem;
  }
`;

export const BtnCard = styled.a`
  background-color: var(--color-white) !important;
  color: var(--color-grey-dark-1);

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

export const BtnAllTours = styled.a`
  background-color: var(--color-primary) !important;
  color: var(--color-white);

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
      background-color: var(--color-primary);
  }

  &:hover::after {
      transform: scale(1.5);
      opacity: 0;
  }
`;
