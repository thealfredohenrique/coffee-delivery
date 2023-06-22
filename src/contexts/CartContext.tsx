import { ReactNode, createContext, useState } from "react";

export interface Coffee {
  id: string;
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

export type CartItemData = Coffee & {
  quantity: number;
};

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
  const [items, setItems] = useState<CartItemData[]>([]);

  function addItemToCart(item: CartItemData) {
    setItems((currentValue) => [...currentValue, item]);
  }

  function removeItemFromCart(itemId: string) {
    setItems((currentValue) => currentValue.filter((e) => e.id !== itemId));
  }

  function changeItemQuantity(itemId: string, quantity: number) {
    setItems((currentValue) =>
      currentValue.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <CartContext.Provider
      value={{ items, addItemToCart, removeItemFromCart, changeItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
