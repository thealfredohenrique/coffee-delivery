import { useContext } from "react";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CartContext, Coffee } from "../../../../contexts/CartContext";
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
  coffee: Coffee;
}

function CartItem({ coffee }: CartItemProps) {
  const { removeCoffeeFromCart } = useContext(CartContext);

  function handleRemove() {
    removeCoffeeFromCart(coffee.id);
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
          <CartItemPriceContainer>R$ 9,90</CartItemPriceContainer>
        </CartItemInfoContainer>

        <CartItemActionsContainer>
          <CartItemCounterContainer>
            <CounterButtonContainer>
              <Minus size={14} weight="bold" />
            </CounterButtonContainer>

            <span>1</span>

            <CounterButtonContainer>
              <Plus size={14} weight="bold" />
            </CounterButtonContainer>
          </CartItemCounterContainer>

          <CartItemRemoveContainer onClick={handleRemove}>
            <Trash size={16} />
            Remover
          </CartItemRemoveContainer>
        </CartItemActionsContainer>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;
