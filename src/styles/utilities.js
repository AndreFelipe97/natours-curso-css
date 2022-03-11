import styled from 'styled-components';

export const UCenterText = styled.div`
  text-align: center;
`;

export const UMarginBottomSmall = styled.div`
  margin-bottom: 1.5rem;
`;

export const UMarginBottomMedium = styled.div`
  margin-bottom: 4rem;

  @media only screen and (max-width: 56.25em)  {
    margin-bottom: 3rem !important;
  }
`;

export const UMarginBottomBig = styled.div`
  margin-bottom: 8rem;

  @media only screen and (max-width: 56.25em)  {
    margin-bottom: 5rem !important;
  }
`;

export const UMarginTopBig = styled.div`
  margin-top: 8rem;
`;

export const UMarginTopHuge = styled.div`
  margin-top: 10rem;
`;
