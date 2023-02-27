import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';

import { ProductContainer, FooterContainer } from './product.styles';

const Product = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext)

    return (
        <ProductContainer>
            <img src={imageUrl} alt={name}
            />
            <FooterContainer>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </FooterContainer>
            <button onClick={ () => addItemToCart (product)}
            >
                Add to cart
            </button>
        </ProductContainer>
    )
}

export default Product

