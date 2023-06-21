import { styled } from "styled-components";

export const CartCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px 44px 6px 44px;
`;

export const CartItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const CartTotalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem 0;
`;

export const CartTotalsItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3,
  span {
    color: ${(props) => props.theme.baseText};
    line-height: 130%;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 400;
  }

  strong {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const CartButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem 0.5rem;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.yellowDark};
  }
`;
