import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { CartContext } from "../../context/cart.context";
import { userSignOut } from "../../utils/firebase/firebase.utlis";

import './menu-bar.styles.scss';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";

const MenuBar = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext)
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={userSignOut} >SIGN OUT</span>
                        )
                            : (
                                <Link className="nav-link" to='/auth'>
                                    SIGN IN
                                </Link>
                            )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default MenuBar