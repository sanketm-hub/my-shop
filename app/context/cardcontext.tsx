"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from "react";

type CartItem = {
  _id: string;
  name: string;
  price: number;
  image?: any[];
  quantity: number;
};

type CardContextType = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  cardItems: CartItem[];
  addProduct: (product: any, quantity: number) => void;
  removeItem: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cardItems, setCardItems] = useState<CartItem[]>([]);

  // 👉 Add product to cart
  const addProduct = (product: any, quantity: number) => {
    setCardItems((prevItems) => {
      const existing = prevItems.find((item) => item._id === product._id);

      if (existing) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity }];
    });
  };

  // 👉 Remove product
  const removeItem = (id: string) => {
    setCardItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  // 👉 Increase qty in cart
  const increaseQty = (id: string) => {
    setCardItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // 👉 Decrease qty in cart
  const decreaseQty = (id: string) => {
    setCardItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CardContext.Provider
      value={{
        showCart,
        setShowCart,
        cardItems,
        addProduct,
        removeItem,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
