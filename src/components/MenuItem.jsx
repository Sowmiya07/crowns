import React from 'react';
import '../styles/MenuItem-Styles.scss';

const MenuItem = ({title, imageUrl, size}) => {
    const styles = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <div className={`${size} menu-item`}>
            <div className="bg-image" style={styles}></div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem