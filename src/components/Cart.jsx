import React from 'react';

import {ReactComponent as CartIcon} from '../assets/cart.svg';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../redux/cart/cart.selector';

import {setToggleCart} from '../redux/cart/cart.action';
import '../styles/Cart-Styles.scss';

const Cart = ({setToggleCart, itemsCount}) => (
    <div className='cart' onClick={setToggleCart}>
        <CartIcon className='cart-icon' />
        <span className='count'>{itemsCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    setToggleCart: () => dispatch(setToggleCart())
})

const mapStateToPrps = state => ({
    itemsCount: selectCartItemsCount(state)
})

export default connect(mapStateToPrps, mapDispatchToProps)(Cart)