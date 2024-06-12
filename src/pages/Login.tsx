import '../style/Login.css';

import React from 'react';

import logo from '../assets/core-base-logo.svg';
import reviewerLoginLogo from './../assets/core-base-login-logo-1.svg';
import managerLoginLogo from './../assets/core-base-login-logo-2.svg';

function Login() {

    return (
        <div className='LoginForm'>
            <img className='LoginFormLogo' src={logo} alt="logo" />
            <a className='LoginButton' href={`${process.env.REACT_APP_API_BASE_URL}/auth/code?type=REVIEWER`} ><img src={reviewerLoginLogo} />평가 대상자로 Google 로그인</a>
            <a className='LoginButton' href={`${process.env.REACT_APP_API_BASE_URL}/auth/code?type=MANAGER`} ><img src={managerLoginLogo} />평가 관리자로 Google 로그인</a>
        </div>
    )
}

export default Login;