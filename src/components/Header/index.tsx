import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";
import {
  ActionsContainer,
  CartContainer,
  HeaderContainer,
  LocationContainer,
} from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <ActionsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationContainer>
        <div>
          <CartContainer>
            <ShoppingCart size={22} weight="fill" />
          </CartContainer>
        </div>
      </ActionsContainer>
    </HeaderContainer>
  );
}

export default Header;
