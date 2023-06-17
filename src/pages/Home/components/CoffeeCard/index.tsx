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

function CoffeeCard({ image, tags, name, description }: CoffeeCardProps) {
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
