import React from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/MenuItem-Styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
    const styles = {
        backgroundImage: `url(${imageUrl})`
    }
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="bg-image" style={styles}></div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)