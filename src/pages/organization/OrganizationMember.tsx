import "../../style/App.css";
import { Button } from "src/components/Button";
import SearchInput from "src/components/SearchInput";

import { EllipsisVertical } from "lucide-react";
import { MODAL_TYPES, useModal } from "src/store/use-modal";
import { getCookieValue } from "src/lib/cookies";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "src/components/ui/table";

import {
  useGetOrganizationMembers,
  MemberRes,
  MemberState,
} from "../../services/organization";

function OrganizationMember() {
  const { data: memberListData, refetch } = useGetOrganizationMembers(
    getCookieValue("organizationId")
  );

  const openModal = useModal((state) => state.openModal);

  const onMemberAdded = () => {
    console.log("구성원 추가 완료 후 처리");
    refetch();
  };

  const handleTestOpenModal = () => {
    openModal({
      type: MODAL_TYPES.ADD_MEMBER,
      props: { onMemberAdded }, // 이벤트 전달
    });
  };

  const handleUpdateOpenModal = () => {
    openModal({
      type: MODAL_TYPES.ADD_MEMBER,
      props: { onMemberAdded }, // 이벤트 전달
    });
  };

  return (
    <div>
      {/* 서브메뉴 */}
      <div className="flex justify-between p-4">
        <div className="flex gap-2">
          <Button onClick={handleTestOpenModal}>구성원 추가하기</Button>
        </div>
        <div>
          <SearchInput />
        </div>
      </div>

      {/* 본 컨텐츠 */}
      <div>
        <Table>
          <TableCaption>팀 목록</TableCaption>
          <TableHeader>
            <TableRow className="text-center bg-gray-100 py-4">
              <TableHead>이름</TableHead>
              <TableHead>팀명</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>설정</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {memberListData && memberListData.length > 0 ? (
              memberListData.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium text-center">
                    {member.name}
                  </TableCell>
                  <TableCell className="text-center">
                    {member.teamName || "-"}
                  </TableCell>
                  <TableCell className="text-center">{member.email}</TableCell>
                  <TableCell className="flex items-center justify-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${getDotColorClass(
                        member.state
                      )}`}
                    />
                    {getMemberStateLabel(member.state)}
                  </TableCell>
                  <TableCell className="text-center">
                    <button className="flex-1" onClick={handleUpdateOpenModal}>
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

// Helper function to convert MemberState to readable labels
function getMemberStateLabel(state: MemberState): string {
  switch (state) {
    case MemberState.WAIT:
      return "대기 중";
    case MemberState.JOIN:
      return "참여";
    case MemberState.QUIT:
      return "탈퇴";
    case MemberState.DENY:
      return "거절됨";
    default:
      return "Unknown";
  }
}

// Helper function to get color class for state dot
function getDotColorClass(state: MemberState): string {
  switch (state) {
    case MemberState.WAIT:
      return "bg-yellow-500"; // 대기 중 - 노란색
    case MemberState.JOIN:
      return "bg-green-500"; // 참여 - 초록색
    case MemberState.QUIT:
      return "bg-gray-500"; // 탈퇴 - 회색
    case MemberState.DENY:
      return "bg-red-500"; // 거절됨 - 빨간색
    default:
      return "bg-black"; // 기본값 - 검정색
  }
}

export default OrganizationMember;
