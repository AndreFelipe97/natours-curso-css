import styled from 'styled-components';
import { moveInLeft, moveInRight } from './animations';

export const HeadingPrimary = styled.h1`
    color: var(--color-white);
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

export const HeadingSecondary = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;

  background-image: linear-gradient(to right, 
    var(--color-primary-light),
    var(--color-primary-dark));

  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: .2rem;
  transition: all .2s;

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: .5rem 1rem 2rem rgba(0, 0 ,0, .2);
  }
`;

export const HeadingTertiary = styled.h3`
  font-size: var(--default-font-size);
  font-weight: 700;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  font-size: var(--default-font-size);

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;
