import styled from "styled-components";
import { AbsCenter } from "../../styles/mixins";

export const Popup = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .8);
  z-index: 9999;
`;

export const PopupContent = styled.div`
  ${AbsCenter}

  width: 75%;
  background-color: var(--color-white);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, .2);
  border-radius: 3px;
  display: table;
  overflow: hidden;
`;

export const PopupLeft = styled.div`
  width: 33.333333%;
  display: table-cell;
`;

export const PopupRight = styled.div`
  width: 66.6666667%;
  display: table-cell;
  vertical-align: middle;
  padding: 3rem 5rem;
`;

export const PopupImg = styled.img`
  display: block;
  width: 100%;
`;

export const ClosePopup = styled.a`
  float: right;
  top: 0;
  
  &:link,
  &:visited {
      color: var(--color-grey-dark-1);
      position: absolute;
      top: 2.5rem;
      right: 2.5rem;
      font-size: 3rem;
      text-decoration: none;
      display: inline-block;
      transition: all .2s;
      line-height: 1;
  }

  &:hover {
      color: var(--color-primary);
  }
`;

export const PopupText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 4rem;

  -moz-column-count: 2;
  -moz-column-gap: 4rem; //1em = 14px;
  -moz-column-rule: 1px solid var(--color-grey-light-2);

  column-count: 2;
  column-gap: 4rem; //1em = 14px;
  column-rule: 1px solid var(--color-grey-light-2);

  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;
