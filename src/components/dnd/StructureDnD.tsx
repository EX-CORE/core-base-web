import {
  Tree,
  getBackendOptions,
  MultiBackend,
} from "@minoru/react-dnd-treeview";
import { useEffect, useState, useRef } from "react";
import { DndProvider } from "react-dnd";
import type { DndTreeViewData } from "src/services/dummy";
import CustomDragPreview from "./CustomDragPreview";
import CustomNode from "./CustomNode";
import DefaultAlert from "../button/DefaultAlert";
import { getCookieValue } from "src/lib/cookies";
import {
  useUpdateOrganizatioTeamsOrder,
  TeamOrderUpdateReq,
} from "src/services/organization";
// import { ThemeProvider, CssBaseline } from "@mui/material";
// import { theme } from "./theme";

type Props = {
  data: DndTreeViewData[];
};

export default function StructureDnD({ data }: Props) {
  const alertRef = useRef<{ openDialog: () => void }>(null);
  const [treeData, setTreeData] = useState<DndTreeViewData[]>(data);
  var newTreeDataTemp = data;

  const { mutateAsync, isSuccess } = useUpdateOrganizatioTeamsOrder(
    getCookieValue("organizationId")
  );

  const handleConfirm = async (): Promise<void> => {
    const teamReq: TeamOrderUpdateReq[] = newTreeDataTemp.map(
      (item: DndTreeViewData, index: number) => ({
        id: item.id,
        parentsId: item.parent == 0 ? null : item.parent,
        order: index,
      })
    );
    try {
      await mutateAsync(teamReq);
      setTreeData(newTreeDataTemp);
    } catch (error) {
      console.error("팀 생성 실패:", error);
      throw error;
    }
  };

  const handleDrop = (newTreeData: any) => {
    newTreeDataTemp = newTreeData;
    alertRef.current?.openDialog();
  };

  useEffect(() => {
    setTreeData(data);
  }, [data]);

  return (
    <DndProvider backend={MultiBackend} options={getBackendOptions()}>
      <DefaultAlert
        ref={alertRef}
        title="경고"
        content="순서를 변경하시겠습니까?"
        confirmText="진행"
        cancelText="취소"
        confirmEvent={handleConfirm}
      />
      <Tree
        tree={treeData}
        rootId={0}
        onDrop={handleDrop}
        initialOpen={true}
        enableAnimateExpand={true}
        dragPreviewRender={(monitorProps) => (
          <CustomDragPreview monitorProps={monitorProps} />
        )}
        render={(node, { depth, isOpen, onToggle }) => (
          <CustomNode
            node={node}
            depth={depth}
            isOpen={isOpen}
            onToggle={onToggle}
          />
        )}
      />
    </DndProvider>
    // </ThemeProvider>
  );
}
