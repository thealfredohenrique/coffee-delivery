import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";
import {
  ActionsContainer,
  CartContainer,
  CartCounterContainer,
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
        <NavLink to="/checkout">
          <CartContainer>
            <ShoppingCart size={22} weight="fill" />
            <CartCounterContainer>3</CartCounterContainer>
          </CartContainer>
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  );
}

export default Header;
