import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "./axios";

export const useGetOrganizationList = () => {
  return useQuery({
    queryKey: ["organizationList"],
    queryFn: async () => await getOrganizationList(),
  });
};

async function getOrganizationList() {
  const response: { data: CompanyListType } = await client.get(
    "/users/organizations"
  );
  return response.data;
}

export interface CompanyListType {
  error: null;
  errors: null;
  participationOrganizations: List[];
  invitedOrganizations: List[];
}

export interface List {
  id: string;
  name: string;
  logo: string;
}
