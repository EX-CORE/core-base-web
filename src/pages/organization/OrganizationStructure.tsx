import { Button } from "src/components/Button";
import { AddTeamModal } from "src/components/modals/AddTeamModal";
import SearchInput from "src/components/SearchInput";
import { MODAL_TYPES, useModal } from "src/store/use-modal";

export default function OrganizationStructure() {
  const modal = useModal((state) => state.modal);
  console.log("선택된 모달은?", modal);
  const openModal = useModal((state) => state.openModal);

  const handleTestOpenModal = () => {
    openModal({
      type: MODAL_TYPES.ADD_TEAM,
    });
  };

  return (
    <div>
      <div className="flex justify-between p-4">
        <div className="flex gap-2">
          <Button onClick={handleTestOpenModal}>팀 추가하기</Button>
          {/* <AddTeamModal /> */}
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
