import CoffeeCard from "../CoffeeCard";
import {
  CoffeesContainer,
  CoffeesListContainer,
  SectionTitleContainer,
} from "./styles";

function Coffees() {
  return (
    <CoffeesContainer>
      <SectionTitleContainer>Nossos cafés</SectionTitleContainer>
      <CoffeesListContainer>
        <CoffeeCard />
      </CoffeesListContainer>
    </CoffeesContainer>
  );
}

export default Coffees;
