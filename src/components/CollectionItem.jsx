import React from 'react';
import '../styles/CollectionItem-Styles.scss';
import CustomButton from './CustomButton';
import {connect} from 'react-redux';
import {addItemToCart} from '../redux/cart/cart.action';

const CollectionItem = ({item, addItemToCart}) => {
    
    const {name, price, imageUrl} = item

    const styles = {
      backgroundImage: `url(${imageUrl})`
    };

    return (
        <div className='collection-item'>
            <div className="image" style={styles}></div>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addItemToCart(item)}>
                Add to cart
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)