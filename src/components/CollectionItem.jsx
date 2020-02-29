import React from 'react';
import '../styles/CollectionItem-Styles.scss';

const CollectionItem = ({name, imageUrl, price}) => {
    const styles = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <div className='collection-item'>
            <div className="image" style={styles}></div>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem