import { DialogContainer } from "src/components/ui/dialog";
import { Input } from "src/components/ui/input";

export function AddTeamModal() {
  return (
    <DialogContainer title="팀 추가하기">
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="teamName" className="text-right">
            팀 이름
          </label>
          <Input
            id="teamName"
            className="col-span-3"
            placeholder="팀 이름을 입력해주세요"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="teamLeader" className="text-right">
            팀 리더
          </label>
          <Input id="teamLeader" className="col-span-3" />
        </div>
      </div>
    </DialogContainer>
  );
}
