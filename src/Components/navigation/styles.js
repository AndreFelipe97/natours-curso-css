import styled from "styled-components";

export const Navigation = styled.div`
  .toogle-button~.navigation-background {
    transform: scale(88);
  }
  .toogle-button~.navigation-nav {
    opacity: 1;
    width: 100%;
  }
`;

export const NaviToggle = styled.button`
  background-color: var(--color-white);
  border-color: transparent;
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem  3rem rgba(0, 0, 0, .1);
`;

export const NavigationBackground = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(var(--color-primary-light), var(--color-primary-dark));
  z-index: 1000;
  transition: all .8s;
`;

export const NavigationNav = styled.nav`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1500;
  opacity: 0;
  width: 0;
  transition: opacity .8s;
`;

export const NavigationList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
`;

export const NavigationItem = styled.li`
  margin: 1rem;
`;

export const NavigationLink = styled.a`
  &:link, &:visited {
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    padding: 1rem 2rem;
    color: var(--color-white);
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, var(--color-white) 50%);
    background-size: 220%;
    transition: all .4s;

    span {
      margin-right: 1.5rem;
      display: inline-block;
    }
  }

  &:hover, &:active {
    background-position: 100%;
    color: var(--color-primary);
    transform: translateX(1rem);
  }
`;
