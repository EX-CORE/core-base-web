import { Button } from "src/components/Button";
import SearchInput from "src/components/SearchInput";
import {
  DndTreeViewData,
  useGetDummyOrganizationStructure,
  useGetOrganizationStructure,
} from "src/services/dummy";
import { MODAL_TYPES, useModal } from "src/store/use-modal";

import {
  Tree,
  getBackendOptions,
  MultiBackend,
} from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import { useEffect, useState } from "react";

export default function OrganizationStructure() {
  const { data: organizationStructure } = useGetOrganizationStructure();
  const { data: dummyOrganizationStructure } =
    useGetDummyOrganizationStructure();

  console.log(dummyOrganizationStructure);

  const [treeData, setTreeData] = useState<DndTreeViewData[]>();
  const handleDrop = (newTreeData: any) => setTreeData(newTreeData);

  const openModal = useModal((state) => state.openModal);

  const handleTestOpenModal = () => {
    openModal({
      type: MODAL_TYPES.ADD_TEAM,
    });
  };

  useEffect(() => {
    setTreeData(dummyOrganizationStructure);
  }, [dummyOrganizationStructure]);

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
        <div>{JSON.stringify(organizationStructure)}</div>

        <div>
          <DndProvider backend={MultiBackend} options={getBackendOptions()}>
            <Tree
              tree={treeData || []}
              rootId={0}
              onDrop={handleDrop}
              render={(node, { depth, isOpen, onToggle }) => (
                <div style={{ marginLeft: depth * 10 }}>
                  {node.droppable && (
                    <span onClick={onToggle}>{isOpen ? "[-]" : "[+]"}</span>
                  )}
                  {node.text}
                </div>
              )}
            />
          </DndProvider>
        </div>
      </div>
    </div>
  );
}
