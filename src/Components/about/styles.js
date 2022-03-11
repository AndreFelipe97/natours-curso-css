import styled from 'styled-components';

export const SectionAbout = styled.section`
  background-color: var(--color-grey-light-1);
  padding: 25rem 0;
  margin-top: -20vh;

  @media only screen and (max-width: 56.25em)  {
    padding: 20rem 0;
  }
`;

export const Composition = styled.div`
  position: relative;

  @media only screen and (max-width: 56.25em)  {
    margin-bottom: 7rem;
  }

  .composition__photo {
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .4);
    position: absolute;
    z-index: 10;
    transition: all .2s;
    outline-offset: 2rem;

    @media only screen and (max-width: 56.25em)  {
      float: left;
      position: relative;
      width: 33.33333333%;
      box-shadow: 0 1.5rem 3rem rgba($color-black, .2);
    }

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

    @media only screen and (max-width: 56.25em)  {
      top: 0;
      transform: scale(1.2);
    }
  }

  .composition__photo--p2 {
    right: 0;
    top: 2rem;

    @media only screen and (max-width: 56.25em)  {
      top: -1rem;
      transform: scale(1.3);
      z-index: 100;
    }
  }

  .composition__photo--p3 {
    left: 20%;
    top: 10rem;

    @media only screen and (max-width: 56.25em)  {
      top: 1rem;
      left: 0;
      transform: scale(1.1);
    }
  }

  &:hover .composition__photo:not(:hover) {
    transform: scale(.95);
  }
`;

