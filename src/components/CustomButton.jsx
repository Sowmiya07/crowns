import React from 'react';
import '../styles/CustomButton-Styles.scss';

const CustomButton =({children, isGoogleSignIn, invertColor, ...otherProps}) => {
    return (
      <button
        className={`${invertColor ? "invert-color" : ""}
        ${isGoogleSignIn ? "google-signin" : ""} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    );
}

export default CustomButton