import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_CART_STATE = {
    cartItems: [],
    isCartOpen: false
}

/**
    state (slice): {cartItems: Array(0), isCartOpen: false}
    payload:       [{id: 2, name: "Blue Beanie", ...}, {...}]
  */

export const cartReducer = (state = INITIAL_CART_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return { ...state, cartItems: payload }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return { ...state, isCartOpen: !state.isCartOpen }
        case CART_ACTION_TYPES.CLEAR_CART:
            state.cartItems = []
            return {...state, isCartOpen: false}
        default:
            return state
    }
}
