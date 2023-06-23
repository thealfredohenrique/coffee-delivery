import { useContext, useState } from "react";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { CartContext, Coffee } from "../../../../contexts/CartContext";
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
  coffee: Coffee;
}

const MIN_QUANTITY = 1;

function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(MIN_QUANTITY);
  const { addItemToCart } = useContext(CartContext);

  const canDecrease = quantity > MIN_QUANTITY;
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
  }).format(coffee.price);

  function handleDecrease() {
    if (canDecrease) setQuantity((currentValue) => currentValue - 1);
  }

  function handleIncrease() {
    setQuantity((currentValue) => currentValue + 1);
  }

  function handleAddToCart() {
    addItemToCart({ ...coffee, quantity });
    setQuantity(MIN_QUANTITY);
  }

  return (
    <CoffeeCardContainer>
      <CoffeeFigureContainer>
        <CoffeeImageContainer
          src={`/src/assets/${coffee.image}`}
          alt={coffee.name}
        />

        <CoffeeTagsContainer>
          {coffee.tags.map((tag) => (
            <CoffeeTagContainer key={tag}>{tag}</CoffeeTagContainer>
          ))}
        </CoffeeTagsContainer>
      </CoffeeFigureContainer>

      <CoffeeTitleContainer>{coffee.name}</CoffeeTitleContainer>
      <CoffeeDescriptionContainer>
        {coffee.description}
      </CoffeeDescriptionContainer>

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
          <span>{quantity}</span>
          <CounterButtonContainer onClick={handleIncrease}>
            <Plus size={14} weight="bold" />
          </CounterButtonContainer>
        </CoffeeCounterContainer>

        <BuyButtonContainer onClick={handleAddToCart}>
          <ShoppingCart size={22} weight="fill" />
        </BuyButtonContainer>
      </BuyCoffeeContainer>
    </CoffeeCardContainer>
  );
}

export default CoffeeCard;
