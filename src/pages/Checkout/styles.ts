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

export const CardContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;
`;

const ICON_COLORS = {
  "dark-yellow": "yellowDark",
  purple: "purple",
};

interface LegendContainerProps {
  color: keyof typeof ICON_COLORS;
}

export const LegendContainer = styled.legend<LegendContainerProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[ICON_COLORS[props.color]]};
  }
`;

export const LegendTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.125rem;
  line-height: 1.3;

  h2 {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    color: ${(props) => props.theme.baseText};
    font-size: 0.875rem;
  }
`;
