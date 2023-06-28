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

interface OrderContextData {
  items: CartItemData[];
  addItemToCart(item: CartItemData): void;
  removeItemFromCart(itemId: string): void;
  changeItemQuantity(itemId: string, quantity: number): void;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextData);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
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
    <OrderContext.Provider
      value={{
        items,
        addItemToCart,
        removeItemFromCart,
        changeItemQuantity,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
