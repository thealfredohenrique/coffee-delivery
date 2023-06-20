import { styled } from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2.5rem 0;
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RightContainer = styled.div`
  width: 28rem;
`;

export const TitleContainer = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme.baseSubtitle};
`;
