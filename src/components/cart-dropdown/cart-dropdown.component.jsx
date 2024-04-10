import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { CartContext } from '../../context/cart.context';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();

    const gotToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItems={item} />)}
            </div>
            <Button onClick={gotToCheckoutHandler}>Checkout</Button>
        </div>
    );
}

export default CartDropDown;