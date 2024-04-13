import React from 'react';
import reviewerLoginLogo from './../logo/core-base-login-logo-1.svg';
import managerLoginLogo from './../logo/core-base-login-logo-2.svg';
import styles from './Login.css';
import logo from "../logo/core-base-logo.svg";
import { BASE_URL } from '../api/api-config';

function Login() {

    return (
        <div className='LoginForm'>
            <img className='LoginFormLogo' src={logo} alt="logo" />
            <a className='LoginButton' href={`${BASE_URL}/auth/code`} ><img src={reviewerLoginLogo} />평가 대상자로 Google 로그인</a>
            <a className='LoginButton' href={`${BASE_URL}/auth/code`} ><img src={managerLoginLogo} />평가 관리자로 Google 로그인</a>
        </div>
    )
}

export default Login;