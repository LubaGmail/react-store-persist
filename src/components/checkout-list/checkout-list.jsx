import { useContext } from 'react'

import { CartContext } from '../../contexts/cart-context'
import CheckoutItem from '../checkout-item/checkout-item'

import { CheckoutContainer } from "./checkout-list.styles"

const CheckoutList = () => {
    const { cartItems,  cartTotalCost, clearCart} = useContext(CartContext)

    const handleClearCart = () => {
       clearCart()
    }
    
    return (
        <>
            <CheckoutContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>    
                    <tbody>
                        { cartItems.map(el => (
                            <tr key={el.id}>
                                <CheckoutItem item={el} />
                            </tr>
                        )) }    
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={2}>Total Cost: </th>
                            <td colSpan={4}>${cartTotalCost}</td>
                        </tr>
                    </tfoot>
                </table>

                <button onClick={handleClearCart} disabled={cartItems.length === 0} >
                    Clear Cart 
                </button>
            </CheckoutContainer>
        </>
    )
}

export default CheckoutList