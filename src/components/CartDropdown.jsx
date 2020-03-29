import React from 'react';
import CustomButton from './CustomButton';
import {connect} from 'react-redux'
import {selectCartItems} from '../redux/cart/cart.selector';
import '../styles/CartDropdown-Styles.scss';
import CartItem from './CartItem';
const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
        {
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)