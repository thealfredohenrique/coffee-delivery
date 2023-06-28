import { CartItemData } from "../../contexts/OrderContext";

export enum ActionTypes {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  CHANGE_ITEM_QUANTITY = "CHANGE_ITEM_QUANTITY",
}

export function addItemToCartAction(item: CartItemData) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: { item },
  };
}

export function removeItemFromCartAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: { itemId },
  };
}

export function changeItemQuantityAction(itemId: string, itemQuantity: number) {
  return {
    type: ActionTypes.CHANGE_ITEM_QUANTITY,
    payload: {
      itemId,
      itemQuantity,
    },
  };
}
