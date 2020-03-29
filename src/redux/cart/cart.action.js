import {cartActionTypes} from './cart.types';

export const setToggleCart = hidden => ({
    type: cartActionTypes.toggleCart,
    payload: hidden
})

export const addItemToCart = item => ({
    type: cartActionTypes.addItem,
    payload: item
})