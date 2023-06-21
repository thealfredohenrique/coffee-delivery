import { CartCardContainer, CartItemsContainer } from "./styles";
import CartItem from "../CartItem";

function CartCard() {
  return (
    <CartCardContainer>
      <CartItemsContainer>
        <CartItem />
        <CartItem />
      </CartItemsContainer>
    </CartCardContainer>
  );
}

export default CartCard;
