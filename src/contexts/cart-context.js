import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => null,
    cartTotalCount: 0,
    cartTotalCost: 0,
    cartItems: [],
    addItemToCart: () => null,
    updateItemQuantity: () => null
})

export const isItemInCart = (product, items) => {
    return items.find(el => el.id === product.id)
}

export const updateQuantity = (product, items, minus=false) => {
    return items.map(el => {
        if (el.id === product.id) {
            minus ? --el.quantity : ++el.quantity
        }
        return el
    })
}   

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartTotalCount, setCartTotalCount] = useState(0)
    const [cartTotalCost, setCartTotalCost] = useState(0)
    const [cartItems, setCartItems] = useState([])
    
    useEffect(el => {
        let totalCount = cartItems.reduce( (acc, el) => {
            return acc += el.quantity
        }, 0)
        setCartTotalCount(totalCount)
    }, [cartItems])

    useEffect(el => {
        let totalCost = cartItems.reduce( (acc, el) => {
            return acc = el.quantity * el.price
        }, 0)
        setCartTotalCost(totalCost)
    }, [cartItems])
    
    const addItemToCart = (product) => {
        let items = [...cartItems]
        isItemInCart(product, cartItems) ? items = updateQuantity(product, items) : items.push({ ...product, quantity: 1 })
        setCartItems(items)
    }

    const updateItemQuantity = (product, isMinus) => {
        let items = updateQuantity(product, cartItems, isMinus)
        setCartItems(items)
    }
    
    const value = { isCartOpen, setIsCartOpen, cartTotalCount, cartTotalCost, cartItems, addItemToCart, updateItemQuantity }
    return(
        <>
            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
        </>
    )
}
