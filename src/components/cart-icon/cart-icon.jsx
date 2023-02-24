import { useDispatch, useSelector } from 'react-redux'

import { CART_ACTION_TYPES } from '../../store/cart/cart.types'
import { selectCartTotalCount } from '../../store/cart/cart.selector'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
    const dispatch = useDispatch()
    const cartTotalCount = useSelector(selectCartTotalCount)

    const toggleCartOpen = () => {
        dispatch({
            type: CART_ACTION_TYPES.SET_IS_CART_OPEN
        })
    }

    return (
        <CartIconContainer onClick={toggleCartOpen} >
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartTotalCount}</ItemCount>
        </CartIconContainer>   
      
    )
}

export default CartIcon