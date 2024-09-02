import { Button } from "src/components/Button";
import { AddTeamModal } from "src/components/modals/AddTeamModal";
import SearchInput from "src/components/SearchInput";

export default function OrganizationStructure() {
  return (
    <div>
      <div className="flex justify-between p-4">
        <div className="flex gap-2">
          {/* <Button>팀 추가하기</Button> */}
          <AddTeamModal />
          <Button>순서 변경</Button>
        </div>
        <div>
          <SearchInput />
        </div>
      </div>

      <div>
        <table></table>
      </div>
    </div>
  );
}
