import { styled } from "styled-components";

export const SuccessContainer = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2.5rem 0;
`;

export const SuccessTitleContainer = styled.h1`
  color: ${(props) => props.theme.yellowDark};
  font-family: "Baloo 2", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 130%;
`;

export const SuccessDescriptionContainer = styled.p`
  color: ${(props) => props.theme.baseSubtitle};
  font-size: 1.25rem;
`;

export const SuccessContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 0;
`;

export const SuccessOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  width: 32.875rem;
  background-color: ${(props) => props.theme.background};
  border-radius: 4px 34px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    z-index: -1;
    background-image: ${(props) =>
      `linear-gradient(125deg, ${props.theme.yellow}, ${props.theme.purple})`};
    border-radius: 6px 36px;
  }
`;

export const SuccessItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ICON_COLORS = {
  orange: "yellowDark",
  purple: "purple",
  yellow: "yellow",
};

interface SuccessIconContainerProps {
  color: keyof typeof ICON_COLORS;
}

export const SuccessIconContainer = styled.i<SuccessIconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  border-radius: 9999px;
  background: ${(props) => props.theme[ICON_COLORS[props.color]]};
  color: ${(props) => props.theme.background};
`;

export const SuccessInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
