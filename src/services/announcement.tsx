import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "./axios";

interface AnnouncementReq {
  title: string;
  content: string;
}

interface AnnouncementRes {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

// API 함수들
const getAnnouncementList = async (organizationId: number) => {
  const { data } = await client.get<AnnouncementRes[]>(
    `/announcement?organizationId=${organizationId}`
  );
  return data;
};

const createAnnouncement = async (
  organizationId: number,
  req: AnnouncementReq
) => {
  const { data } = await client.post(
    `/announcement?organizationId=${organizationId}`,
    req
  );
  return data;
};

const updateAnnouncement = async (
  organizationId: number,
  announcementId: number,
  req: AnnouncementReq
) => {
  const { data } = await client.put(
    `/announcement/${announcementId}?organizationId=${organizationId}`,
    req
  );
  return data;
};

const deleteAnnouncement = async (
  organizationId: number,
  announcementId: number
) => {
  await client.delete(
    `/announcement/${announcementId}?organizationId=${organizationId}`
  );
};

// React Query Hooks
export const useAnnouncementList = (organizationId: number) => {
  return useQuery({
    queryKey: ["announcements", organizationId],
    queryFn: () => getAnnouncementList(organizationId),
  });
};

export const useCreateAnnouncement = () => {
  return useMutation({
    mutationFn: ({
      organizationId,
      req,
    }: {
      organizationId: number;
      req: AnnouncementReq;
    }) => createAnnouncement(organizationId, req),
  });
};

export const useUpdateAnnouncement = () => {
  return useMutation({
    mutationFn: ({
      organizationId,
      announcementId,
      req,
    }: {
      organizationId: number;
      announcementId: number;
      req: AnnouncementReq;
    }) => updateAnnouncement(organizationId, announcementId, req),
  });
};

export const useDeleteAnnouncement = () => {
  return useMutation({
    mutationFn: ({
      organizationId,
      announcementId,
    }: {
      organizationId: number;
      announcementId: number;
    }) => deleteAnnouncement(organizationId, announcementId),
  });
};
