import { CartItemData } from "../../contexts/CartContext";
import { ActionTypes } from "./actions";

interface CartState {
  items: CartItemData[];
}

function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    }
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.itemId),
      };
    }
    case ActionTypes.CHANGE_ITEM_QUANTITY: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.itemId) {
            return { ...item, quantity: action.payload.itemQuantity };
          } else {
            return item;
          }
        }),
      };
    }
    default: {
      return state;
    }
  }
}

export default cartReducer;
