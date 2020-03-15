import React from 'react';
import '../styles/CustomButton-Styles.scss';

const CustomButton =({children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-signin': ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton