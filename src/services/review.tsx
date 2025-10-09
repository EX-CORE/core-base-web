import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "./axios";
import {dummyFetch} from "./dummy"
import {mockReviews, mockReviewDetails} from "../pages/review/mockData";
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

export interface ReviewDetailRes {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  createdDate: string;
  state: ReviewState;
  participants: {
    evaluators: any[];
    targets: any[];
  };
  statistics: {
    totalResponses: number;
    totalTargets: number;
    responseRate: number;
    averageScore: number;
  };
  ratingOptions: { label: string; score: number }[];
  questions: any[];
}

export const useGetReviewDetails = (reviewId: number) => {
  return useQuery<ReviewDetailRes | undefined>({
    queryKey: ["reviewDetail", reviewId],
    queryFn: async () => {
      const data = mockReviewDetails[reviewId as keyof typeof mockReviewDetails] as ReviewDetailRes | undefined;
      return await dummyFetch<ReviewDetailRes | undefined>(data);
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
