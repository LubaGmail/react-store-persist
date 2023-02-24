/**
    state:      {categories: {…}, cart: {…}}
    state.cart:     {cartItems: Array(1), isCartOpen: true}
    state.cart.cartItems:    [{ id: 2, quantity: 1, ...}, {...}]
 */

export const selectCart = (state) => {
    return state.cart
}
export const selectCartItems = (state) => {
    return state.cart.cartItems
}
export const selectCartTotalCount = (state) => {
    const { cartItems } = state.cart
    const total = cartItems.reduce((accum, el) => {
        return accum += el.quantity
    }, 0)
    return total
}
export const selectCartTotalCost = (state) => {
    const { cartItems } = state.cart
    const cost = cartItems.reduce((accum, el) => {
        return accum = accum + el.price * el.quantity
    }, 0)
    return cost
}
export const selectIsCartOpen = (state) => {
    return state.cart.isCartOpen
}
