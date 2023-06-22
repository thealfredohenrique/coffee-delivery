import { useState } from "react";
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

interface CoffeeCardProps {
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

const MIN_COUNTER = 1;

function CoffeeCard({
  image,
  tags,
  name,
  description,
  price,
}: CoffeeCardProps) {
  const [counter, setCounter] = useState(MIN_COUNTER);

  const canDecrease = counter > MIN_COUNTER;
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
  }).format(price);

  function handleDecrease() {
    if (canDecrease) setCounter((currentValue) => currentValue - 1);
  }

  function handleIncrease() {
    setCounter((currentValue) => currentValue + 1);
  }

  return (
    <CoffeeCardContainer>
      <CoffeeFigureContainer>
        <CoffeeImageContainer src={`/src/assets/${image}`} alt={name} />

        <CoffeeTagsContainer>
          {tags.map((tag) => (
            <CoffeeTagContainer key={tag}>{tag}</CoffeeTagContainer>
          ))}
        </CoffeeTagsContainer>
      </CoffeeFigureContainer>

      <CoffeeTitleContainer>{name}</CoffeeTitleContainer>
      <CoffeeDescriptionContainer>{description}</CoffeeDescriptionContainer>

      <BuyCoffeeContainer>
        <CoffeePriceContainer>
          R$ <strong>{formattedPrice}</strong>
        </CoffeePriceContainer>

        <CoffeeCounterContainer>
          <CounterButtonContainer
            onClick={handleDecrease}
            disabled={!canDecrease}
          >
            <Minus size={14} weight="bold" />
          </CounterButtonContainer>
          <span>{counter}</span>
          <CounterButtonContainer onClick={handleIncrease}>
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
