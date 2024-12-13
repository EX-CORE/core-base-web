// import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import type { AxiosRequestConfig } from "axios";
import { allDeleteCookie, getCookieValue } from "src/lib/cookies";

export const client = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL ||
    "https://core-base-5103db8db361.herokuapp.com",
});

client.interceptors.request.use(
  (config) => {
    const accessToken = getCookieValue("accessToken");
    if (!accessToken || accessToken === "") {
      window.location.href = "/login";
      throw new Error("AccessToken is missing. Redirecting to login.");
    }

    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<any>) => {
    if (!error.response) return;
    const {
      status,
      data: { message, path },
    } = error.response;

    if (status === 401) {
      // toast.error("로그인 x", {
      //   toastId: message,
      // });
      allDeleteCookie();
      //   router.push("/login");
    }

    if (status === 403) {
      // toast.error("권한이 없어요", {
      //   toastId: message,
      // });

      allDeleteCookie();
      //   router.push("/login");
    }

    if (status === 500) {
      //   toast.error("서버에서 에러가 발생했습니다. 잠시 후 다시 시도해주세요.", {
      //     toastId: message,
      //   });
    }

    return Promise.reject(error);
  }
);

export const fetcher = async <T>(config: AxiosRequestConfig) => {
  const response = await client<T>(config);
  return response.data;
};
