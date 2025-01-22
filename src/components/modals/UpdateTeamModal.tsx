import { useState } from "react";
import { DialogContainer } from "src/components/ui/dialog";
import { Input } from "src/components/ui/input";
import { getCookieValue } from "src/lib/cookies";
import {
  TeamUpdateReq,
  useUpdateOrganizationTeams,
} from "src/services/organization";

export function UpdateTeamModal(props: any) {
  const [teamName, setTeamName] = useState<string>(props.name);
  const [teamLeader, setTeamLeader] = useState<string>("");

  const { mutateAsync, isSuccess } = useUpdateOrganizationTeams(
    getCookieValue("organizationId")
  );

  const updateTeam = async (): Promise<void> => {
    if (teamName) {
      const teamReq: TeamUpdateReq[] = [
        {
          id: props.id,
          name: teamName,
          parentsId: props.parentsId,
          order: props.order,
        },
      ];

      try {
        await mutateAsync(teamReq);
        console.log("팀 수정 성공!");
      } catch (error) {
        console.error("팀 수정 실패:", error);
        throw error;
      }
    } else {
      console.error("팀 이름은 필수입니다.");
    }
  };

  return (
    <DialogContainer title="팀 수정하기" handleClickConfirm={updateTeam}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="teamName" className="text-right">
            팀 이름
          </label>
          <Input
            id="teamName"
            className="col-span-3"
            placeholder="팀 이름을 입력해주세요"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="teamLeader" className="text-right">
            팀 리더
          </label>
          <Input
            id="teamLeader"
            className="col-span-3"
            placeholder="팀 리더를 입력해주세요"
            value={teamLeader}
            onChange={(e) => setTeamLeader(e.target.value)}
          />
        </div>
      </div>
    </DialogContainer>
  );
}
