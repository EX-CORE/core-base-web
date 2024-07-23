import "../style/Login.css";

import React, { useEffect } from "react";

import logo from "../assets/core-base-logo.svg";
import reviewerLoginLogo from "./../assets/core-base-login-logo-1.svg";
import managerLoginLogo from "./../assets/core-base-login-logo-2.svg";
import { Router, useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../services/login";

function Login() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const navigate = useNavigate();

  // 예시로 특정 쿼리 파라미터를 가져오는 방법
  const code = queryParams.get("code")!;

  const { mutate, data, isSuccess } = useLogin(code);

  console.log("돌려주는 데이터", data);

  useEffect(() => {
    if (code) {
      mutate();
      if (isSuccess) {
        const { accessToken, refreshToken } = data.data;
        console.log(accessToken, refreshToken);
        document.cookie = `accessToken=${accessToken};path=/;`;
        document.cookie = `refreshToken=${refreshToken};path=/;`;
        navigate("/");
      }
    }
  }, [code, mutate, isSuccess, data]);

  return (
    <div className="LoginForm">
      <img className="LoginFormLogo" src={logo} alt="logo" />
      <a
        className="LoginButton"
        href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=597589376829-aiiurcdf6557jok9vdkt4rukbjjb7odq.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/calendar.readonly%20https://www.googleapis.com/auth/calendar&response_type=code&access_type=offline&state=state_parameter_passthrough_value&include_granted_scopes=true&redirect_uri=http://localhost:3000/login&prompt=consent`}
      >
        <img src={reviewerLoginLogo} />
        평가 대상자로 Google 로그인
      </a>
      <a
        className="LoginButton"
        href={`${process.env.REACT_APP_API_BASE_URL}/auth/code?type=MANAGER`}
      >
        <img src={managerLoginLogo} />
        평가 관리자로 Google 로그인
      </a>
    </div>
  );
}

export default Login;
