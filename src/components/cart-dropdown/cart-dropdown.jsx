import { Link } from "react-router-dom"
import { useContext } from "react"

import CartItem from '../cart-item/cart-item'
import Button from '../button/button'
import { BUTTON_TYPES } from '../button/button'
import { CartContext } from '../../contexts/cart-context'

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems
} from './cart-dropdown.styles';

const CartDropdown = () => {
    // cartItems: [] 
    const { cartItems } = useContext(CartContext)

    const handleClick = () => {
        // console.log('handleClick in cart-dropdown')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.map((el) => (
                        <li key={el.id}>
                            <CartItem item={el} />
                        </li>
                    ))
                } 
                {
                    cartItems.length === 0 && 
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <Link to='/checkout'>
                <Button buttonType={BUTTON_TYPES.checkout} onClick={handleClick}>          
                    GO TO CHECKOUT
                </Button>
            </Link>
        </CartDropdownContainer>
    )
}

export default CartDropdown

