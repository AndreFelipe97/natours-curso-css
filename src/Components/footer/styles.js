import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--color-grey-dark-3);
  padding: 10rem 0;
  font-size: 1.4rem;
  color: var(--color-grey-light-1);

  @media only screen and (max-width: 56.25em)  {
    padding: 8rem 0;
  }
`;

export const FooterLogoBox = styled.div`
  text-align: center;
  margin-bottom: 8rem;

  @media only screen and (max-width: 56.25em)  {
    margin-bottom: 6rem;
  }
`;

export const FooterLogoImage = styled.img`
  width: 15rem;
  height: auto;
`;

export const FooterNavigation = styled.div`
  border-top: 1px solid var(--color-grey-dark-1);
  padding-top: 2rem;
  display: inline-block;

  @media only screen and (max-width: 56.25em)  {
    width: 100%;
    text-align: center;
  }

  ul {

    list-style: none;

    li {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 1.5rem;
      }
    }
  }
`;

export const FooterLink = styled.a`
  &:link, &:visited {
    color: var(--color-grey-light-1);
    background-color: var(--color-grey-dark-3);
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    transition: all .2s;
  }

  &:hover, &:active {
    color: var(--color-primary);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .4);
    transform: rotate(5deg) scale(1.3);
  }
`

export const Copyright = styled.p`
  border-top: 1px solid var(--color-grey-dark-1);
  padding-top: 2rem;
  width: 80%;
  float: right;

  @media only screen and (max-width: 56.25em)  {
    width: 100%;
    float: none;
  }
`;
