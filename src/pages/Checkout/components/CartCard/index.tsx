import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import CartItem from "../CartItem";
import { formatCurrency } from "../../../../utils/format-currency";
import {
  CartButtonContainer,
  CartCardContainer,
  CartItemsContainer,
  CartTotalsContainer,
  CartTotalsItemContainer,
} from "./styles";

const DELIVERY_FEE = 3.5;

function CartCard() {
  const { items, getItemsTotal } = useContext(CartContext);

  const itemsTotal = getItemsTotal();
  const cartTotal = itemsTotal + DELIVERY_FEE;

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
          <span>{formatCurrency(itemsTotal)}</span>
        </CartTotalsItemContainer>

        <CartTotalsItemContainer>
          <h3>Entrega</h3>
          <span>{formatCurrency(DELIVERY_FEE)}</span>
        </CartTotalsItemContainer>

        <CartTotalsItemContainer>
          <strong>Total</strong>
          <strong>{formatCurrency(cartTotal)}</strong>
        </CartTotalsItemContainer>
      </CartTotalsContainer>

      <CartButtonContainer>Confirmar pedido</CartButtonContainer>
    </CartCardContainer>
  );
}

export default CartCard;
