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
  });
}

export const useGetOrganization = (organizationId: string) => {
  return useQuery({
    queryKey: ["organization/" + organizationId],
    queryFn: async () => await getOrganization(organizationId),
  });
};

async function getOrganization(organizationId: string) {
  if (!organizationId) return;

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

export function useUpdateOrganizatioTeams(organizationId: string) {
  return useMutation<TeamRes[], Error, TeamUpdateReq[]>({
    mutationFn: async (req: TeamUpdateReq[]) => {
      const response = await client.put(
        "/organization/" + organizationId + "/teams",
        req
      );
      return response.data;
    },
    onSuccess(data: TeamRes[]) {
      return data;
    },
  });
}

export function useUpdateOrganizatioTeamsOrder(organizationId: string) {
  return useMutation<TeamRes[], Error, TeamOrderUpdateReq[]>({
    mutationFn: async (req: TeamOrderUpdateReq[]) => {
      const response = await client.patch(
        "/organization/" + organizationId + "/teams/order",
        req
      );
      return response.data;
    },
    onSuccess(data: TeamRes[]) {
      return data;
    },
  });
}

export const useGetOrganizationMembers = (organizationId: string) => {
  return useQuery({
    queryKey: ["organization/" + organizationId + "/members"],
    queryFn: async () => await getOrganizationMembers(organizationId),
  });
};

async function getOrganizationMembers(organizationId: string) {
  if (organizationId == undefined) return null;
  const response: { data: MemberRes[] } = await client.get(
    "/organization/" + organizationId + "/members"
  );
  return response.data;
}

export function useCreateOrganizationMembers(organizationId: string) {
  return useMutation<MemberRes, Error, MemberReq>({
    mutationFn: async (req: MemberReq) => {
      const response = await client.post(
        "/organization/" + organizationId + "/members",
        req
      );
      return response.data;
    },
    onSuccess(data: MemberRes) {
      return data;
    },
  });
}

export interface MemberRes {
  id: number;
  name: string;
  email: string;
  teamName?: string | undefined;
  permission: PermissionType;
  state: MemberState;
}

export interface MemberReq {
  name: string;
  email: string;
  teamId?: string | undefined;
  permission: PermissionType;
}

export enum PermissionType {
  MANAGER = "MANAGER",
  REVIEWER = "REVIEWER",
}

export enum MemberState {
  WAIT = "WAIT",
  JOIN = "JOIN",
  QUIT = "QUIT",
  DENY = "DENY",
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
  id: number;
  parentsId?: string | null;
  name: string;
  order?: number | null;
}

export interface TeamUpdateReq {
  id: number;
  name: string;
  parentsId?: string | null;
  order?: number | null;
}

export interface TeamOrderUpdateReq {
  id: number;
  parentsId?: number | null;
  order?: number | null;
}

export type DndTreeViewData = {
  id: number;
  parent: number;
  droppable?: boolean;
  text: string;
  data?: any;
};

export function convertTeamResToDndTreeViewData(
  teamResArray: TeamRes[] | null | undefined
): DndTreeViewData[] {
  if (!teamResArray) return [];
  return teamResArray.map((teamRes) => ({
    id: teamRes.id,
    parent: teamRes.parentsId ? parseInt(teamRes.parentsId) : 0,
    text: teamRes.name,
    droppable: true,
    data: {
      order: teamRes.order || null,
    },
  }));
}
