import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { CartContext } from "../../contexts/CartContext";
import logo from "../../assets/logo.svg";
import {
  ActionsContainer,
  CartContainer,
  CartCounterContainer,
  HeaderContainer,
  LocationContainer,
} from "./styles";

function Header() {
  const { items } = useContext(CartContext);

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
            {items.length > 0 && (
              <CartCounterContainer>{items.length}</CartCounterContainer>
            )}
          </CartContainer>
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  );
}

export default Header;
