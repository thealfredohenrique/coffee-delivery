import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import CartItem from "../CartItem";
import {
  CartButtonContainer,
  CartCardContainer,
  CartItemsContainer,
  CartTotalsContainer,
  CartTotalsItemContainer,
} from "./styles";

function CartCard() {
  const { items } = useContext(CartContext);

  return (
    <CartCardContainer>
      <CartItemsContainer>
        {items.map((item) => (
          <CartItem key={item.id} coffee={item} />
        ))}
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

      <CartButtonContainer>Confirmar pedido</CartButtonContainer>
    </CartCardContainer>
  );
}

export default CartCard;
