import { styled } from "styled-components";

export const CartItemContainer = styled.li`
  display: flex;
  column-gap: 1.25rem;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};
  padding-bottom: 1.5rem;

  &:not(:first-child) {
    padding-top: 1.5rem;
  }
`;

export const CartItemImageContainer = styled.img`
  height: 4rem;
  width: 4rem;
`;

export const CartItemDetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CartItemInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemNameContainer = styled.h3`
  color: ${(props) => props.theme.baseSubtitle};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3;
`;

export const CartItemPriceContainer = styled.strong`
  color: ${(props) => props.theme.baseText};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
`;

export const CartItemActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CartItemCounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  height: 2rem;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;

  span {
    color: ${(props) => props.theme.baseTitle};
    line-height: 1;
  }
`;

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

export const CounterButtonContainer = styled(BaseButton)`
  background-color: transparent;
  color: ${(props) => props.theme.purple};

  &:hover {
    color: ${(props) => props.theme.purpleDark};
  }
`;

export const CartItemRemoveContainer = styled(BaseButton)`
  gap: 0.25rem;
  padding: 0 0.5rem;
  background-color: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseText};
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 1;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme.baseHover};
    color: ${(props) => props.theme.baseSubtitle};

    svg {
      color: ${(props) => props.theme.purpleDark};
    }
  }
`;
