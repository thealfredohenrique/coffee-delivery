import {
  CartCardContainer,
  CartItemsContainer,
  CartTotalsContainer,
  CartTotalsItemContainer,
} from "./styles";
import CartItem from "../CartItem";

function CartCard() {
  return (
    <CartCardContainer>
      <CartItemsContainer>
        <CartItem />
        <CartItem />
      </CartItemsContainer>

      <CartTotalsContainer>
        <CartTotalsItemContainer>
          <h3>Total de itens</h3>
          <span>R$ 29,70</span>
        </CartTotalsItemContainer>

        <CartTotalsItemContainer>
          <h3>Entrega</h3>
          <span>R$ 3,50</span>
        </CartTotalsItemContainer>

        <CartTotalsItemContainer>
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </CartTotalsItemContainer>
      </CartTotalsContainer>
    </CartCardContainer>
  );
}

export default CartCard;
