import React from 'react';
import {ReactComponent as Logo} from '../assets/crown.svg';
import '../styles/Header-Styles.scss';
import {Link} from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import {connect} from 'react-redux';
import Cart from '../components/Cart';
import CartDropdown from './CartDropdown';
import {createStructuredSelector} from 'reselect';
import {selectHidden} from '../redux/cart/cart.selector';
import {selectCurrentUser} from '../redux/user/user.selector';

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="">
                    CONTACT
                </Link>
                {currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : 
                        <Link className="option" to="/signin">SIGN IN</Link>}
                <Cart />
            </div>
            {
                hidden ?  null : <CartDropdown />
        }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})

export default connect(mapStateToProps)(Header);