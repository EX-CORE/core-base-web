import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

var baseUrl =
  process.env.REACT_APP_API_BASE_URL ||
  "https://core-base-5103db8db361.herokuapp.com";
var type = process.env.REACT_APP_ACTIVE_PROFILES || "LOCAL";

export function useGetRoleMenubar() {
  return useQuery({
    queryKey: ["loginUserRole"],
    queryFn: async () => {
      return {
        name: "요아정",
        role: "MASTER_ADMIN",
      };
    },
  });
}

export function useLogin(authCode: String) {
  return useMutation({
    mutationFn: async () =>
      await axios.post(baseUrl + "/auth/login", null, {
        // Query 파라미터
        params: {
          code: authCode,
          type: type,
        },
      }),
    onSuccess(data: any) {
      console.log(data);
    },
  });
}
