import AddressCard from "./components/AddressCard";
import CartCard from "./components/CartCard";
import PaymentCard from "./components/PaymentCard";
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
        <PaymentCard />
      </LeftContainer>

      <RightContainer>
        <TitleContainer>Cafés selecionados</TitleContainer>

        <CartCard />
      </RightContainer>
    </CheckoutContainer>
  );
}

export default Checkout;
