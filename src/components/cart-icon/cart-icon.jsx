import { useContext } from 'react'

import { CartContext } from '../../contexts/cart-context'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)
    
    const toggleCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <CartIconContainer onClick={toggleCartOpen} >
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>0</ItemCount>
        </CartIconContainer>   
      
    )
}

export default CartIcon