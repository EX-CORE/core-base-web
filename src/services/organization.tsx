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

export function useUpdateOrganization(organizationId: string) {
  return useMutation<OrganizationRes, Error, OrganizationCreateReq>({
    mutationFn: async (req: OrganizationCreateReq) => {
      const response = await client.put(
        "/organization/" + organizationId,
        req,
        {
          headers: { "content-type": "multipart/form-data" },
        }
      );
      return response.data;
    },
    onSuccess(data: OrganizationRes) {
      return data;
    },
  });
}

export const useGetOrganization = (organizationId: string) => {
  return useQuery({
    queryKey: ["organization/" + organizationId],
    queryFn: async () => await getOrganization(organizationId),
  });
};

async function getOrganization(organizationId: string) {
  if (organizationId == undefined) return null;
  const response: { data: OrganizationRes } = await client.get(
    "/organization/" + organizationId
  );
  return response.data;
}

export const useGetOrganizationTeams = (organizationId: string) => {
  return useQuery({
    queryKey: ["organization/" + organizationId + "/teams"],
    queryFn: async () => await getOrganizationTeams(organizationId),
  });
};

async function getOrganizationTeams(organizationId: string) {
  if (organizationId == undefined) return null;
  const response: { data: TeamRes[] } = await client.get(
    "/organization/" + organizationId + "/teams"
  );
  return response.data;
}

export function useCreateOrganizationTeams(organizationId: string) {
  return useMutation<TeamRes, Error, TeamCreateReq>({
    mutationFn: async (req: TeamCreateReq) => {
      const response = await client.post(
        "/organization/" + organizationId + "/teams",
        req
      );
      return response.data;
    },
    onSuccess(data: TeamRes) {
      return data;
    },
  });
}

export function useUpdateOrganizatioTeams(
  organizationId: string,
  teamId: string
) {
  return useMutation<TeamRes[], Error, TeamCreateReq[]>({
    mutationFn: async (req: TeamCreateReq[]) => {
      const response = await client.put(
        "/organization/" + organizationId + "/teams/" + teamId,
        req
      );
      return response.data;
    },
    onSuccess(data: TeamRes[]) {
      return data;
    },
  });
}

export interface OrganizationCreateReq {
  name: string;
  logo?: File | undefined;
  ceo?: string | undefined;
  telNumber?: string | undefined;
  address?: string | undefined;
}

export interface OrganizationRes {
  id: string;
  name: string;
  logoFileName?: string | undefined;
  ceo?: string | undefined;
  telNumber?: string | undefined;
  address?: string | undefined;
  teams?: TeamRes[] | undefined;
}

export interface TeamCreateReq {
  name: string;
  order?: number | null;
  parentsId?: string | null;
}

export interface TeamRes {
  id: string;
  name: string;
  order?: number | null;
  parentsId?: string | null;
}
