import styled from "styled-components";
import { Nat10 } from '../../assets/img';

export const SectionBook = styled.section`
  padding: 15rem 0;
  background-image: linear-gradient(to right bottom, var(--color-primary-light), var(--color-primary-dark));

  @media only screen and (max-width: 56.25em)  {
    padding: 10rem 0;
  }
`;

export const Book = styled.div`
  background-image: linear-gradient(105deg, rgba(255, 255, 255, .9) 0%, rgba(255, 255, 255, .9) 50%, transparent 50%), url(${Nat10});
  background-size: cover;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .2);

  @media only screen and (max-width: 75em)  {
    background-image: linear-gradient(105deg, rgba(255, 255, 255, .9) 0%, rgba(255, 255, 255, .9) 65%, transparent 65%), url(${Nat10});
  }

  @media only screen and (max-width: 56.25em)  {
    background-image: linear-gradient(to right, rgba(255, 255, 255, .9) 0%, rgba(255, 255, 255, .9) 100%), url(${Nat10});
  }
`;

export const BookForm = styled.div`
  width: 50%;
  padding: 6rem;

  @media only screen and (max-width: 75em)  {
    width: 65%;
  }

  @media only screen and (max-width: 56.25em)  {
    width: 100%;
  }
`;

export const Form = styled.form``;

export const FormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const FormRadioGroup = styled.div`
  width: 49%;
  display: inline-block;

  @media only screen and (max-width: 56.25em)  {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const Input = styled.input`
  font-size: 1.5rem;
  font-family: inherit;
  color: inherit;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, .5);
  border: none;
  border-bottom: 3px solid transparent;
  width: 100%;
  display: block;
  transition: all .3s;

  @media only screen and (max-width: 56.25em)  {
    width: 100%;
  }

  &::-webkit-input-placeholder {
    color: var(--color-grey-dark-2);
  }

  &:focus {
    outline: none;
    box-shadow:  0 1rem 2rem rgba(0, 0, 0, .1);
    border-bottom: 3px solid var(--color-primary);
  }

  &:focus:invalid {
    border-bottom: 3px solid var(--color-secondary-dark);
  }

  &:placeholder-shown+label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;

export const RadioInput = styled.input`
  display: none;

  &:checked ~ label span::after {
    opacity: 1;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 2rem;
  margin-top: .7rem;
  display: block;
`;

export const RadioLabel = styled.label`
  font-size: var(--default-font-size);
  cursor: pointer;
  position: relative;
  padding-left: 4.5rem;

  span {
    height: 3rem;
    width: 3rem;
    border: 5px solid var(--color-primary);
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: -.4rem;

    &::after {
      content: "";
      display: block;
      height: 1.3rem;
      width: 1.3rem;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--color-primary);
      opacity: 0;
      transition: opacity .2s;
    }
  }
`;
