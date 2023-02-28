import { useRef } from "react"
import { useContext } from "react"

import { CartContext } from "../../contexts/cart-context"

import { ImageContainer, ClickableSpan, ClickableTd } from './checkout-item.styles'

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item
    const quantityRef = useRef()
    const { updateItemQuantity } = useContext(CartContext)
  
    const subtractQuantity = () => {
        let x = parseInt( (quantityRef.current.innerText).toString() )
        if  (!(x < 2) ) {
            updateItemQuantity(item, true)
            quantityRef.current.innerText = x.toString()
        }
    }
    
    const addQuantity = () => {
        let x = parseInt( (quantityRef.current.innerText).toString() )
        updateItemQuantity(item, false)
        quantityRef.current.innerText = x.toString()
    }

    const handleRemoveItem = () => {

    }

    return (
        <>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <td>{name}</td>
            <td >
                <ClickableSpan onClick={subtractQuantity}>  &#10094; </ClickableSpan>
                <span ref={quantityRef}>{quantity}</span>
                <ClickableSpan onClick={addQuantity}>  &#10095; </ClickableSpan>
            </td>
            <td>${price}</td>
            <ClickableTd  onClick={handleRemoveItem}>
                <span>&#10005;</span>
            </ClickableTd>  
        </>
    )
}

export default CheckoutItem