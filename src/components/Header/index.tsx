import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { OrderContext } from "../../contexts/OrderContext";
import logo from "../../assets/logo.svg";
import {
  ActionsContainer,
  CartContainer,
  CartCounterContainer,
  HeaderContainer,
  HeaderContentWrapper,
  LocationContainer,
} from "./styles";

function Header() {
  const { items } = useContext(OrderContext);
  const cartItemsQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderContainer>
      <HeaderContentWrapper>
        <img src={logo} />
        <ActionsContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </LocationContainer>
          <NavLink to={!items.length ? "/" : "/checkout"}>
            <CartContainer>
              <ShoppingCart size={22} weight="fill" />
              {items.length > 0 && (
                <CartCounterContainer>{cartItemsQuantity}</CartCounterContainer>
              )}
            </CartContainer>
          </NavLink>
        </ActionsContainer>
      </HeaderContentWrapper>
    </HeaderContainer>
  );
}

export default Header;
