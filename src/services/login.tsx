import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

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
      await axios.post(
        "https://core-base-5103db8db361.herokuapp.com/auth/login",
        null,
        {
          // Query 파라미터
          params: {
            code: authCode,
            type: "REVIEWER",
          },
        }
      ),
    onSuccess(data: any) {
      console.log(data);
    },
  });
}
