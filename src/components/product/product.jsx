import { useDispatch , useSelector} from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { CART_ACTION_TYPES } from '../../store/cart/cart.types';
import { addItemToCart } from '../../store/cart/cart.actions';

import { ProductContainer, FooterContainer } from './product.styles';

const Product = ({ product }) => {
    const { name, imageUrl, price } = product;
    const cartItems = useSelector(selectCartItems)              // []
    const dispatch = useDispatch()

    const addCartItem = (product) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: addItemToCart(product, cartItems)          // updated cartItems []
        })
    }

    return (
        <ProductContainer>
            <img src={imageUrl} alt={name}
            />
            <FooterContainer>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </FooterContainer>
            <button onClick={ () => addCartItem (product)}
            >
                Add to cart
            </button>
        </ProductContainer>
    )
}

export default Product

