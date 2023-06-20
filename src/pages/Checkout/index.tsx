import AddressCard from "./components/AddressCard";
import {
  CheckoutContainer,
  LeftContainer,
  RightContainer,
  TitleContainer,
} from "./styles";

function Checkout() {
  return (
    <CheckoutContainer>
      <LeftContainer>
        <TitleContainer>Complete seu pedido</TitleContainer>

        <AddressCard />
      </LeftContainer>

      <RightContainer>
        <TitleContainer>Cafés selecionados</TitleContainer>
      </RightContainer>
    </CheckoutContainer>
  );
}

export default Checkout;
