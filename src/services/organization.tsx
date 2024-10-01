import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "./axios";

export function useCreateOrganization() {
  return useMutation<OrganizationRes, Error, OrganizationCreateReq>({
    mutationFn: async (req: OrganizationCreateReq) => {
      const response = await client.post("/organization", req, {
        headers: { "content-type": "multipart/form-data" },
      });
      return response.data;
    },
    onSuccess(data: OrganizationRes) {
      return data;
    },
  });
}

export const useGetCompany = (organizationId: string) => {
  return useQuery({
    queryKey: ["organization/" + organizationId],
    queryFn: async () => await getCompany(organizationId),
  });
};

async function getCompany(organizationId: string) {
  if (organizationId == undefined) return null;
  const response: { data: OrganizationRes } = await client.get(
    "/organization/" + organizationId
  );
  return response.data;
}

export interface OrganizationCreateReq {
  name: string;
  logo?: File | null;
  ceo?: string | null;
  telNumber?: string | null;
  address?: string | null;
}

export interface OrganizationRes {
  id: string;
  name: string;
  logoFileName?: string | undefined;
  ceo?: string | null;
  telNumber?: string | null;
  address?: string | null;
  teams?: TeamRes[] | null;
}

export interface TeamRes {
  id: string;
  name: string;
  order?: number | null;
  parentsId?: string | null;
}
