import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "./axios";
import {dummyFetch} from "./dummy"
import {mockReviews} from "../pages/review/mockData";
import {ReviewState} from "../types";

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

export const useGetOrganizationReviews = (organizationId: string) => {
  return useQuery<ReviewRes[]>({
    queryKey: ["reviewListData", organizationId],
    queryFn: async () => {
      const orgId = Number(organizationId) || 0;
      const mapped: ReviewRes[] = mockReviews.map((r) => ({
        id: String(r.id),
        title: r.title,
        organizationId: orgId,
        reviewPeriod: `${r.startDate} ~ ${r.endDate}`,
        description: undefined,
        state: r.state,
      }));
      return await dummyFetch<ReviewRes[]>(mapped);
    },
  });
};

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
  state?: ReviewState | undefined;
  surveyPeriod?: string | undefined;
  reviewPeriod?: string | undefined;
}
