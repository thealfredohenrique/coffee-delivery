import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: ${(props) => props.theme.background};
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LocationContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purpleDark};
  border-radius: 8px;
  font-size: 0.875rem;
  line-height: 1.3;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
`;

export const CartCounterContainer = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 1000px;
  background: ${(props) => props.theme.yellowDark};
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.045rem;
`;
