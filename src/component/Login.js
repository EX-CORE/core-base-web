import React, {useState, useEffect} from 'react';
import reviewerLoginLogo from './../logo/core-base-login-logo-1.svg';
import managerLoginLogo from './../logo/core-base-login-logo-2.svg';
import styles from './Login.css';
import logo from "../logo/core-base-logo.svg";
// import axios from 'axios';

function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    // login 버튼 클릭 이벤트
    const onClickReviewerLogin = () => {
        console.log('click login as reviewer')
    }

    const onClickManagerLogin = () => {
        console.log('click login as manager')
    }

    // 페이지 렌더링 후 가장 처음 호출되는 함수
    // useEffect(() => {
    //         axios.get('/user_inform/login')
    //             .then(res => console.log(res))
    //             .catch()
    //     },
    //     // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    //     [])

    return (
        <div className='LoginForm'>
            <img className='LoginFormLogo' src={logo} alt="logo" />
            <button className='LoginButton' type='button' onClick={onClickReviewerLogin}><img src={reviewerLoginLogo} />평가 대상자로 Google 로그인</button>
            <button className='LoginButton' type='button' onClick={onClickManagerLogin}><img src={managerLoginLogo} />평가 관리자로 Google 로그인</button>
        </div>
    )
}

export default Login;