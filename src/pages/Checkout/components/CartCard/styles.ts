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
