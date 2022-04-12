import { ShoppingAction, ShoppingActionTypes } from "../actions/shopping.actions";
import { ShoppingItem } from "../models/shopping-item.model";


const initialState: Array<ShoppingItem> = [
  {
    id: '3424das-4324dasd-3434das3-3434', 
    name: 'Diet Coke'
  }
]

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction){
  switch(action.type){
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload]
    default: 
      return state;
  }
}