import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "./axios";

export const useGetOrganizationList = () => {
  return useQuery({
    queryKey: ["organizationList"],
    queryFn: async () => await getOrganizationList(),
  });
};

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => await getUserInfo(),
  });
};

async function getOrganizationList() {
  const response: { data: CompanyListType } = await client.get(
    "/users/organizations"
  );
  return response.data;
}

async function getUserInfo() {
  const response: { data: UserInfo } = await client.get("/users");
  return response.data;
}

export interface CompanyListType {
  error: null;
  errors: null;
  participationOrganizations: List[];
  invitedOrganizations: List[];
}

export interface UserInfo {
  name: string;
  email: string;
  profile: string;
}

export interface List {
  id: string;
  name: string;
  logo: string;
}
