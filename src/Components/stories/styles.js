import styled from "styled-components";

export const SectionStories = styled.section`
  position: relative;
  padding: 15rem;

  @media only screen and (max-width: 56.25em)  {
    padding: 10rem 0;
  }
`;

export const Story = styled.div`
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0,0, .1);
  background-color: rgba(255, 255, 255, .6);
  border-radius: 3px;
  padding: 6rem;
  padding-left: 9rem;
  font-size: var(--default-font-size);
  transform: skewX(-12deg);

  & >* {
    transform: skewX(12deg);
  }

  @media only screen and (max-width: 56.25em)  {
      width: 100%;
      padding: 4rem;
      padding-left: 7rem;
  }

  @media only screen and (max-width: 37.5em) {
    transform: skewX(0);
  }

  .img {
    height: 100%;
    transform: translateX(-4rem) scale(1.4);
    backface-visibility: hidden;
    transition: all .5s;
  }

  .caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: var(--color-white);
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all .5s;
    backface-visibility: hidden;
  }

  &:hover .caption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &:hover .img {
    transform: translateX(-4rem) scale(1);
    filter: blur(3px) brightness(80%);
  }
`;

export const Shape = styled.figure`
  width: 15rem;
  height: 15rem;
  float: left;
  -webkit-shape-outside: circle(50% at 50% 50%);;
  shape-outside: circle(50% at 50% 50%);
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  transform: translateX(-3rem) skewX(12deg);
  position: relative;

  @media only screen and (max-width: 37.5em) {
    transform: translateX(-3rem) skewX(0);
  }
`;

export const StoryText = styled.div`
  transform: skewX(12deg);

  @media only screen and (max-width: 37.5em) {
    transform: skewX(0);
  }
`;

export const BgVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: .15;
  overflow: hidden;

  .bg-video__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;