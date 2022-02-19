import styled from "styled-components";

import { Nat4 } from '../../assets/img';

export const SectionFeatures = styled.div`
  padding: 20rem 0;
  background-image: linear-gradient(to right bottom,
        rgba(126, 213, 111, .8),
        rgba(40, 180, 131, .8)),
        url(${Nat4});
  background-size: cover;

  transform: skewY(-7deg);
  margin-top: -10rem;

  & > * {
    transform: skewY(7deg);
  }
`;

export const FetureBox = styled.div`
  background-color: rgba(255, 255, 255, .8);
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: .3rem;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);
  transition: transform .3s;

  svg {
    font-size: 6rem;
    margin-bottom: .5rem;
    display: inline-block;
  }

  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }
`;

export const Text = styled.p``;