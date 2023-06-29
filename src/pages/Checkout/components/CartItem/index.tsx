import { useContext } from "react";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { OrderContext, CartItemData } from "../../../../contexts/OrderContext";
import { formatCurrency } from "../../../../utils/format-currency";
import {
  CartItemActionsContainer,
  CartItemContainer,
  CartItemCounterContainer,
  CartItemDetailsContainer,
  CartItemImageContainer,
  CartItemInfoContainer,
  CartItemNameContainer,
  CartItemPriceContainer,
  CartItemRemoveContainer,
  CounterButtonContainer,
} from "./styles";

interface CartItemProps {
  coffee: CartItemData;
}

function CartItem({ coffee }: CartItemProps) {
  const { removeItemFromCart, changeItemQuantity } = useContext(OrderContext);

  const formattedPrice = formatCurrency(coffee.price * coffee.quantity);

  function handleRemove() {
    removeItemFromCart(coffee.id);
  }

  function handleDecrease() {
    if (coffee.quantity > 1) changeItemQuantity(coffee.id, coffee.quantity - 1);
  }

  function handleIncrease() {
    changeItemQuantity(coffee.id, coffee.quantity + 1);
  }

  return (
    <CartItemContainer>
      <CartItemImageContainer
        src={`/src/assets/${coffee.image}`}
        alt={coffee.name}
      />

      <CartItemDetailsContainer>
        <CartItemInfoContainer>
          <CartItemNameContainer>{coffee.name}</CartItemNameContainer>
          <CartItemPriceContainer>{formattedPrice}</CartItemPriceContainer>
        </CartItemInfoContainer>

        <CartItemActionsContainer>
          <CartItemCounterContainer>
            <CounterButtonContainer type="button" onClick={handleDecrease}>
              <Minus size={14} weight="bold" />
            </CounterButtonContainer>

            <span>{coffee.quantity}</span>

            <CounterButtonContainer type="button" onClick={handleIncrease}>
              <Plus size={14} weight="bold" />
            </CounterButtonContainer>
          </CartItemCounterContainer>

          <CartItemRemoveContainer onClick={handleRemove}>
            <Trash size={16} /> Remover
          </CartItemRemoveContainer>
        </CartItemActionsContainer>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;
