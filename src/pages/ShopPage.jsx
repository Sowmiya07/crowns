import React from 'react';
import SHOP_DATA from '../data/shop_data';
import CollectionPreview from '../components/PreviewCollection';

class ShopPage extends React.Component {
    constructor() {
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div>
                {collections.map( ({id, ...otherProps}) => <CollectionPreview 
                    key={id} {...otherProps}/>)}
            </div>
        )
    }
}

export default ShopPage