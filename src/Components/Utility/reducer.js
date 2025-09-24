import { Type } from "./action.type";

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case Type.SET_USER:
        return{
            ...state,
            user:action.user
        }

    default:
      return state;
  }
};
