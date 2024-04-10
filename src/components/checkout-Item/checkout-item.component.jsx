import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../context/cart.context';

const CheckOutItem = ({ cartItem }) => {
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)
    const { name, imageUrl, price, quantity } = cartItem;

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const decrementHandler = () => removeItemFromCart(cartItem);
    const incrementHandler = () => addItemToCart(cartItem);
    return (
        <div className='checkout-item-container '>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={decrementHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={incrementHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem;