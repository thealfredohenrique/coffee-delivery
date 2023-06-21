import { Minus, Plus, Trash } from "@phosphor-icons/react";
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

function CartItem() {
  return (
    <CartItemContainer>
      <CartItemImageContainer
        src="/src/assets/traditional-espresso-coffee.png"
        alt="Expresso Tradicional"
      />

      <CartItemDetailsContainer>
        <CartItemInfoContainer>
          <CartItemNameContainer>Expresso Tradicional</CartItemNameContainer>
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

          <CartItemRemoveContainer>
            <Trash size={16} />
            Remover
          </CartItemRemoveContainer>
        </CartItemActionsContainer>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;
