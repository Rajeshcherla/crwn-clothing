import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const gotToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems && cartItems.map(item => <CartItem key={item.id} cartItems={item} />)}
            </div>
            <Button onClick={gotToCheckoutHandler}>Checkout</Button>
        </div>
    );
}

export default CartDropDown;