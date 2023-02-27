import { useContext } from 'react'

import { CartContext } from '../../contexts/cart-context'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartTotalCount, } = useContext(CartContext)
    
    const toggleCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <CartIconContainer onClick={toggleCartOpen} >
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartTotalCount}</ItemCount>
        </CartIconContainer>   
      
    )
}

export default CartIcon