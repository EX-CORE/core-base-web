import SearchInput from "src/components/SearchInput";
import {
  // useGetOrganizationReviews,
  ReviewState,
} from "../../services/review";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "src/components/ui/table";
import { Badge } from "src/components/ui/badge";
import { useGetOrganizationReviews } from "../../services/dummy";
import { getCookieValue } from "src/lib/cookies";

import { EllipsisVertical } from "lucide-react";

function ReviewList() {
  const { data: reviewListData } = useGetOrganizationReviews(
    getCookieValue("organizationId")
  );

  return (
    <div>
      {/* 서브메뉴 */}
      <div className="flex justify-between p-4">
        <div className="flex gap-2"></div>
        <div>
          <SearchInput />
        </div>
      </div>

      {/* 본 컨텐츠 */}
      <div>
        <Table>
          <TableCaption>리뷰 목록</TableCaption>
          <TableHeader>
            <TableRow className="text-center bg-gray-100 py-4">
              <TableHead className="text-center">리뷰명</TableHead>
              <TableHead className="text-center">기간</TableHead>
              <TableHead className="text-center">상태</TableHead>
              <TableHead className="text-center">설정</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviewListData && reviewListData.length > 0 ? (
              reviewListData.map((review) => (
                <TableRow key={review.id}>
                  <TableCell className="font-medium text-center">
                    {review.title}
                  </TableCell>
                  <TableCell className="text-center">
                    {review.reviewPeriod}
                  </TableCell>
                  <TableCell className="flex items-center justify-center gap-2">
                    <Badge
                      variant={"outline"}
                      className={getBadgeColorClass(review.state)}
                    >
                      {getBadgeLabelClass(review.state)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <button className="flex-1">
                      <EllipsisVertical />
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function getBadgeColorClass(state: ReviewState): string {
  switch (state) {
    case ReviewState.TEMP:
      return "border-yellow-500 bg-yellow-500 text-white"; // 임시, 시작 전 - 노란색
    case ReviewState.DONE:
    case ReviewState.DELETED:
      return "border-gray-300 bg-gray-300 text-white"; // 완료 - 회색
    case ReviewState.PROCESS:
      return "border-blue-500 bg-blue-500 text-white"; // 진행중 - 파란색
    case ReviewState.PAUSE:
      return "border-red-500 bg-red-500 text-white"; // 중단됨 - 빨간색
    default:
      return "bg-gray-500"; // 기본값 - 회색
  }
}

function getBadgeLabelClass(state: ReviewState): string {
  switch (state) {
    case ReviewState.TEMP:
      return "시작전"; // 임시, 시작 전 - 노란색
    case ReviewState.PROCESS:
      return "진행중"; // 진행중 - 파란색
    case ReviewState.PAUSE:
      return "중단됨"; // 중단됨 - 빨간색
    case ReviewState.DONE:
      return "완료"; // 완료 - 회색
    case ReviewState.DELETED:
      return "삭제됨"; // 삭제됨 - 회색
    default:
      return "Unknown"; // 기본값 - 회색
  }
}

export default ReviewList;
