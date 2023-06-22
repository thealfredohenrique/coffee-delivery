import { ReactNode, createContext, useState } from "react";

export interface Coffee {
  id: string;
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

interface CartContextData {
  items: Coffee[];
  addCoffeeToCart(coffee: Coffee): void;
  removeCoffeeFromCart(coffeeId: string): void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<Coffee[]>([]);

  function addCoffeeToCart(coffee: Coffee) {
    setItems((currentValue) => [...currentValue, coffee]);
  }

  function removeCoffeeFromCart(coffeeId: string) {
    setItems((currentValue) => currentValue.filter((e) => e.id !== coffeeId));
  }

  return (
    <CartContext.Provider
      value={{ items, addCoffeeToCart, removeCoffeeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
