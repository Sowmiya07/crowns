import React from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import '../styles/SignIn-Signup-Page-Styles.scss';

const Signin_Signup_page = () => {
    return (
        <div className='signin-signup'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Signin_Signup_page