import { styled } from "styled-components";

export const IntroContainer = styled.div`
  background-image: url("/src/assets/background.svg");
`;

export const ContentWrapper = styled.section`
  display: flex;
  height: 34rem;
  max-width: 70rem;
  margin: 0 auto;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 36.75rem;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme.baseTitle};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme.baseSubtitle};
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  height: 5.25rem;
`;

export const ItemContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ICON_COLORS = {
  "dark-yellow": "yellowDark",
  yellow: "yellow",
  gray: "baseText",
  purple: "purple",
};

interface IconContainerProps {
  color: keyof typeof ICON_COLORS;
}

export const IconContainer = styled.i<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme[ICON_COLORS[props.color]]};
  color: ${(props) => props.theme.background};
`;
