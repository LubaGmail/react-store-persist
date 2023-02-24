const isItemInCart = (product, items) => {
    return items.find(el => el.id === product.id)
}
const updateQuantity = (product, items, minus=false) => {
    return items.map(el => {
        if (el.id === product.id) {
            minus ? --el.quantity : ++el.quantity
        }
        return el
    })
}   

export const addItemToCart = (product, items) => {
    isItemInCart(product, items) ? items = updateQuantity(product, items) : items.push({ ...product, quantity: 1 })
    return items
}

export const removeItemFromCart = (product, items) => {
    let updatedItems = items.filter(el => el.id !== product.id)
    return updatedItems
}

export const increaseItemQuantity = (product, items) => {
    let updatedItems = updateQuantity(product, items)
    return updatedItems
}

export const reduceItemQuantity = (product, items) => {
    let updatedItems = updateQuantity(product, items, true)
    return updatedItems
}
