import { useContext } from 'react';
import './check-out.styles.scss';
import { CartContext } from '../../context/cart.context';
import CheckOutItem from '../../components/checkout-Item/checkout-item.component';

const CheckOut = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>description</span>
                </div>
                <div className='header-block'>
                    <span>quantity</span>
                </div>
                <div className='header-block'>
                    <span>price</span>
                </div>
                <div className='header-block'>
                    <span>remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => (

                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <span className='total'>Total : ${cartTotal}</span>
        </div>
    )
}

export default CheckOut;