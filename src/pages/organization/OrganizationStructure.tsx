import { Button } from "src/components/button/Button";
import SearchInput from "src/components/SearchInput";
import {
  useGetDummyOrganizationStructure,
  useGetOrganizationStructure,
} from "src/services/dummy";
import {
  useGetOrganizationTeams,
  convertTeamResToDndTreeViewData,
} from "../../services/organization";
import { MODAL_TYPES, useModal } from "src/store/use-modal";
import { getCookieValue } from "src/lib/cookies";

import StructureDnD from "src/components/dnd/StructureDnD";

export default function OrganizationStructure() {
  const { data: organizationStructure, refetch } = useGetOrganizationTeams(
    getCookieValue("organizationId")
  );

  const openModal = useModal((state) => state.openModal);
  const refetchOrganizationStructure = async () => {
    await refetch();
  };

  const handleTestOpenModal = () => {
    openModal({
      type: MODAL_TYPES.ADD_TEAM,
      onClose: refetchOrganizationStructure
    });
  };

  return (
    <div>
      {/* 서브메뉴 */}
      <div className="flex justify-between p-4">
        <div className="flex gap-2">
          <Button onClick={handleTestOpenModal}>팀 추가하기</Button>
          <Button>순서 변경</Button>
        </div>
        <div>
          <SearchInput />
        </div>
      </div>

      {/* 본 컨텐츠 */}
      <div>
        {/* <div>{JSON.stringify(organizationStructure)}</div> */}

        <div>
          <div className="flex w-full text-center bg-gray-100 py-4">
            <span className="flex-[3_3_0%]">팀명</span>
            <span className="flex-1">팀 리더</span>
            <span className="flex-1">설정</span>
          </div>

          <StructureDnD
            data={convertTeamResToDndTreeViewData(organizationStructure) || []}
          />
        </div>
      </div>
    </div>
  );
}
