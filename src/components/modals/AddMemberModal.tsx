import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { DialogContainer } from "src/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "src/components/ui/select";
import { Input } from "src/components/ui/input";
import { getCookieValue } from "src/lib/cookies";
import {
  useCreateOrganizationMembers,
  useGetOrganizationTeams,
  MemberReq,
  TeamRes,
  PermissionType,
} from "src/services/organization";

interface AddMemberModalProps {
  onMemberAdded: () => void; // 이벤트 핸들러 타입
}

export function AddMemberModal(props: AddMemberModalProps) {
  const { onMemberAdded } = props;

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [teamId, setTeamId] = useState<string | undefined>(undefined);
  const [permission, setPermission] = useState<PermissionType>(
    PermissionType.REVIEWER
  );

  const organizationId = getCookieValue("organizationId");

  // Fetch teams data for select options
  const { data: teams } = useGetOrganizationTeams(organizationId);

  const { mutateAsync, isSuccess } =
    useCreateOrganizationMembers(organizationId);

  const createMember = async (): Promise<void> => {
    if (name && email) {
      const memberReq: MemberReq = {
        name,
        email,
        teamId,
        permission,
      };
      try {
        await mutateAsync(memberReq);
        console.log("구성원 생성 성공!");
        onMemberAdded(); // 구성원 생성 후 이벤트 호출
      } catch (error) {
        console.error("구성원 생성 실패:", error);
        throw error;
      }
    } else {
      console.error("이름과 이메일은 필수입니다.");
    }
  };

  return (
    <DialogContainer title="구성원 추가하기" handleClickConfirm={createMember}>
      <div className="grid gap-4 py-4">
        {/* 이름 입력 */}
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="name" className="text-right">
            이름
          </label>
          <Input
            id="name"
            className="col-span-3"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* 이메일 입력 */}
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="email" className="text-right">
            이메일
          </label>
          <Input
            id="email"
            className="col-span-3"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* 팀 선택 */}
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="team" className="text-right">
            팀
          </label>
          <Select value={teamId} onValueChange={(value) => setTeamId(value)}>
            <SelectTrigger id="team" className="col-span-3">
              <SelectValue placeholder="팀을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              {teams?.map((team) => (
                <SelectItem key={team.id} value={String(team.id)}>
                  {team.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="permission" className="text-right">
            권한
          </label>
          <Select
            value={permission}
            onValueChange={(value) => setPermission(value as PermissionType)}
          >
            <SelectTrigger id="permission" className="col-span-3">
              <SelectValue placeholder="권한을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={PermissionType.MANAGER}>매니저</SelectItem>
              <SelectItem value={PermissionType.REVIEWER}>리뷰어</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </DialogContainer>
  );
}
