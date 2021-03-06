import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
         [selectCartItems],
         cartItems =>
           cartItems.reduce(
             (totalCount, cartItem) => totalCount + cartItem.quantity,
             0
           )
       );