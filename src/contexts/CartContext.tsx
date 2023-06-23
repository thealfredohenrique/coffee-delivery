import { ReactNode, createContext, useReducer } from "react";
import {
  addItemToCartAction,
  changeItemQuantityAction,
  removeItemFromCartAction,
} from "../reducers/cart/actions";
import cartReducer from "../reducers/cart/reducer";

export interface Coffee {
  id: string;
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

export type CartItemData = Coffee & { quantity: number };

interface CartContextData {
  items: CartItemData[];
  addItemToCart(item: CartItemData): void;
  removeItemFromCart(itemId: string): void;
  changeItemQuantity(itemId: string, quantity: number): void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
  });
  const { items } = cart;

  function addItemToCart(item: CartItemData) {
    dispatch(addItemToCartAction(item));
  }

  function removeItemFromCart(itemId: string) {
    dispatch(removeItemFromCartAction(itemId));
  }

  function changeItemQuantity(itemId: string, itemQuantity: number) {
    dispatch(changeItemQuantityAction(itemId, itemQuantity));
  }

  return (
    <CartContext.Provider
      value={{ items, addItemToCart, removeItemFromCart, changeItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
