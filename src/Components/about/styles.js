import styled from 'styled-components';

export const SectionAbout = styled.section`
  background-color: var(--color-grey-light-1);
  padding: 25rem 0;
  margin-top: -20vh;
`;

export const BtnText = styled.a`
  &:link, &:visited {
    font-size: var(--default-font-size);
    color: var(--color-primary);
    display: inline-block;
    text-decoration: none;
    border-bottom: .1rem solid var(--color-primary);
    padding: .3rem;
    transition: all .2s;
  }

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .15);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 .5rem 2rem rgba(0, 0, 0, .15);
    transform: translateY(0);
  }
`;

export const Composition = styled.div`
  position: relative;

  .composition__photo {
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .4);
    position: absolute;
    z-index: 10;
    transition: all .2s;
    outline-offset: 2rem;

    &:hover {
      outline: 1.5rem solid var(--color-primary);
      transform: scale(1.05) translateY(-.5rem);
      box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, .5);
      z-index: 20;
    }
  }

  .composition__photo--p1 {
    left: 0;
    top: -2rem;
  }

  .composition__photo--p2 {
    right: 0;
    top: 2rem;
  }

  .composition__photo--p3 {
    left: 20%;
    top: 10rem;
  }

  &:hover .composition__photo:not(:hover) {
    transform: scale(.95);
  }
`;

