import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "./axios";

// export const useGetOrganizationReviews = (organizationId: string) => {
//   return useQuery({
//     queryKey: [`/organization/${organizationId}/reviews`],
//     queryFn: async () => await getReviews(organizationId),
//   });
// };

// async function getReviews(organizationId: string) {
//   if (!organizationId) return;

//   const response: { data: ReviewRes } = await client.get(
//     "/review/" + organizationId
//   );
//   return response.data;
// }

export enum ReviewState {
  TEMP = "TEMP",
  PROCESS = "PROCESS",
  PAUSE = "PAUSE",
  DONE = "DONE",
  DELETED = "DELETED",
}

export interface ReviewCreateReq {
  name: string;
  logo?: File | undefined;
  ceo?: string | undefined;
  telNumber?: string | undefined;
  address?: string | undefined;
}

export interface ReviewRes {
  id: string;
  title: string;
  organizationId: number;
  // 임시로 다 string 으로 해둠
  description?: String;
  sections?: [] | undefined;
  state?: string | undefined;
  surveyPeriod?: string | undefined;
  reviewPeriod?: string | undefined;
}
