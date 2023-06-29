import { ReactNode, createContext, useReducer, useState } from "react";
import {
  addItemToCartAction,
  changeItemQuantityAction,
  clearCartAction,
  removeItemFromCartAction,
} from "../reducers/cart/actions";
import cartReducer from "../reducers/cart/reducer";
import { PaymentType } from "../pages/Checkout";

export interface Coffee {
  id: string;
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

export type CartItemData = Coffee & { quantity: number };

interface Address {
  zipCode: string;
  street: string;
  number: string;
  complement?: string | undefined;
  neighborhood: string;
  city: string;
  state: string;
}

interface OrderContextData {
  items: CartItemData[];
  address: Address | null;
  paymentType: PaymentType | null;
  addItemToCart(item: CartItemData): void;
  removeItemFromCart(itemId: string): void;
  changeItemQuantity(itemId: string, quantity: number): void;
  clearCart(): void;
  fillAddress(address: Address): void;
  fillPaymentType(paymentType: PaymentType): void;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextData);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [address, setAddress] = useState<Address | null>(null);
  const [paymentType, setPaymentType] = useState<PaymentType | null>(null);
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

  function clearCart() {
    dispatch(clearCartAction());
  }

  function fillAddress(address: Address) {
    setAddress(address);
  }

  function fillPaymentType(paymentType: PaymentType) {
    setPaymentType(paymentType);
  }

  return (
    <OrderContext.Provider
      value={{
        items,
        address,
        paymentType,
        addItemToCart,
        removeItemFromCart,
        changeItemQuantity,
        clearCart,
        fillAddress,
        fillPaymentType,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
