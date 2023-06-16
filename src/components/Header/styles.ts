import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
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
`;
