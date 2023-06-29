import { styled } from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2.5rem 0;
`;

const SideWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LeftContainer = styled(SideWrapper)`
  flex: 1;
`;

export const RightContainer = styled(SideWrapper)`
  width: 28rem;
`;

export const TitleContainer = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme.baseSubtitle};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px;
`;

const LEGEND_ICON_COLORS = {
  purple: "purple",
  yellow: "yellowDark",
};

interface LegendContainerProps {
  color: keyof typeof LEGEND_ICON_COLORS;
}

export const LegendContainer = styled.legend<LegendContainerProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[LEGEND_ICON_COLORS[props.color]]};
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
