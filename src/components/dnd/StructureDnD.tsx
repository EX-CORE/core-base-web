import {
  Tree,
  getBackendOptions,
  MultiBackend,
} from "@minoru/react-dnd-treeview";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import type { DndTreeViewData } from "src/services/dummy";
import CustomDragPreview from "./CustomDragPreview";
import CustomNode from "./CustomNode";
// import { ThemeProvider, CssBaseline } from "@mui/material";
// import { theme } from "./theme";

type Props = {
  data: DndTreeViewData[];
};

export default function StructureDnD({ data }: Props) {
  const [treeData, setTreeData] = useState<DndTreeViewData[]>(data);
  const handleDrop = (newTreeData: any) => setTreeData(newTreeData);

  useEffect(() => {
    setTreeData(data);
  }, [data]);

  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    <DndProvider backend={MultiBackend} options={getBackendOptions()}>
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
