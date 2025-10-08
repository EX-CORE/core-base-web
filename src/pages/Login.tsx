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
  const redirect_uri =
    process.env.REACT_APP_REDIRECT_URL || "http://localhost:3000/login";

  console.log(redirect_uri);
  console.log(process.env.REACT_APP_REDIRECT_URL);
  console.log(process.env.REACT_APP_ACTIVE_PROFILES);

  const navigate = useNavigate();

  // 예시로 특정 쿼리 파라미터를 가져오는 방법
  const code = queryParams.get("code")!;

  const { mutate, data, isSuccess } = useLogin(code);

  useEffect(() => {
    if (code && !isSuccess) {
      // isSuccess가 false일 때만 mutate 실행
      mutate();
    }

    if (true) {
      // 데이터가 있을 때만 처리
      // const { accessToken, refreshToken } = data.data;
      document.cookie = `accessToken=eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3NjM1MTUwNTIsImlhdCI6MTc1OTkxNTA1Miwic3ViIjoiZTBiYTZlZjgtOWJiNy00ZWY1LThjODAtYTg3NDM1NjYyYTUxIiwidHlwZSI6IkFDQ0VTUyJ9.oSuq4pU_r10ztIoS7CmDWgwrLKEW7764S2Aht-rc9SIWSsMbbCCOYvhL6WMoUWS_69EycDMq95wwu-j8kWs40g;path=/;`;
      document.cookie = `refreshToken=eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3NjM1MTUwNTIsImlhdCI6MTc1OTkxNTA1Miwic3ViIjoiZTBiYTZlZjgtOWJiNy00ZWY1LThjODAtYTg3NDM1NjYyYTUxIiwidHlwZSI6IkFDQ0VTUyJ9.oSuq4pU_r10ztIoS7CmDWgwrLKEW7764S2Aht-rc9SIWSsMbbCCOYvhL6WMoUWS_69EycDMq95wwu-j8kWs40g;path=/;`;
      navigate("/");
    }
  }, [code, isSuccess, data]); // mutate 제거

  return (
    <div className="LoginForm">
      <img className="LoginFormLogo" src={logo} alt="logo" />
      <a
        className="LoginButton"
        href={
          `https://accounts.google.com/o/oauth2/v2/auth?client_id=597589376829-aiiurcdf6557jok9vdkt4rukbjjb7odq.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/calendar.readonly%20https://www.googleapis.com/auth/calendar&response_type=code&access_type=offline&state=state_parameter_passthrough_value&include_granted_scopes=true&redirect_uri=` +
          redirect_uri +
          `&prompt=consent`
        }
      >
        <img src={reviewerLoginLogo} />
        Google 로그인
      </a>
    </div>
  );
}

export default Login;
