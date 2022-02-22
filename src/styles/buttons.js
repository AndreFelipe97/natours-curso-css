import styled from "styled-components";

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