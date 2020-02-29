import React from 'react';
import '../styles/PreviewCollection-Styles.scss';
import CollectionItem from './CollectionItem';

const PreviewCollection = ({title, items}) => {
    return (
        <div className='preview-collection'>
            <h1 className='preview-title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, index) => index < 4)
                        .map(({id, ...otherProps}) => <CollectionItem key={id} {...otherProps} />)
                }
            </div>
        </div>
    )
}

export default PreviewCollection