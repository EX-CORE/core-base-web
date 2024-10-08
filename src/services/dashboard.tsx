import { useQuery } from "@tanstack/react-query";

import { client } from "./axios";

export const useGetAnnouncementInfoList = (organizationId: string) => {
  return useQuery({
    queryKey: ["announcementInfoList/" + organizationId],
    queryFn: async () => await getAnnouncementInfoList(organizationId),
  });
};

async function getAnnouncementInfoList(organizationId: string) {
  const response: { data: AnnouncementInfo[] } = await client.get(
    "/announcement",
    { params: { organizationId: organizationId } }
  );
  return response.data;
}

export interface AnnouncementInfo {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}
