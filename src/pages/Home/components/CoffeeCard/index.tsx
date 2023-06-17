import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import {
  BuyButtonContainer,
  BuyCoffeeContainer,
  CoffeeCardContainer,
  CoffeeCounterContainer,
  CoffeeDescriptionContainer,
  CoffeeFigureContainer,
  CoffeeImageContainer,
  CoffeePriceContainer,
  CoffeeTagContainer,
  CoffeeTagsContainer,
  CoffeeTitleContainer,
  CounterButtonContainer,
} from "./styles";

function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeFigureContainer>
        <CoffeeImageContainer
          src="/src/assets/traditional-espresso-coffee.png"
          alt="Café Expresso Tradicional"
        />

        <CoffeeTagsContainer>
          <CoffeeTagContainer>Tradicional</CoffeeTagContainer>
        </CoffeeTagsContainer>
      </CoffeeFigureContainer>

      <CoffeeTitleContainer>Expresso Tradicional</CoffeeTitleContainer>
      <CoffeeDescriptionContainer>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDescriptionContainer>

      <BuyCoffeeContainer>
        <CoffeePriceContainer>
          R$ <strong>9,90</strong>
        </CoffeePriceContainer>

        <CoffeeCounterContainer>
          <CounterButtonContainer>
            <Minus size={14} weight="bold" />
          </CounterButtonContainer>
          <span>1</span>
          <CounterButtonContainer>
            <Plus size={14} weight="bold" />
          </CounterButtonContainer>
        </CoffeeCounterContainer>

        <BuyButtonContainer>
          <ShoppingCart size={22} weight="fill" />
        </BuyButtonContainer>
      </BuyCoffeeContainer>
    </CoffeeCardContainer>
  );
}

export default CoffeeCard;
