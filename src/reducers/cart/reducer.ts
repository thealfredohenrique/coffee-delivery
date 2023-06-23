import { produce } from "immer";
import { CartItemData } from "../../contexts/CartContext";
import { ActionTypes } from "./actions";

interface CartState {
  items: CartItemData[];
}

function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      return produce(state, (draft) => {
        draft.items.push(action.payload.item);
      });
    }
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const itemIndex = state.items.findIndex((item) => {
        return item.id === action.payload.itemId;
      });
      return produce(state, (draft) => {
        draft.items.splice(itemIndex, 1);
      });
    }
    case ActionTypes.CHANGE_ITEM_QUANTITY: {
      const itemIndex = state.items.findIndex((item) => {
        return item.id === action.payload.itemId;
      });
      return produce(state, (draft) => {
        draft.items[itemIndex].quantity = action.payload.itemQuantity;
      });
    }
    default: {
      return state;
    }
  }
}

export default cartReducer;
