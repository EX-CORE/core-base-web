// import Typography from "@mui/material/Typography";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import { useDragOver } from "@minoru/react-dnd-treeview";
// import { TypeIcon } from "./TypeIcon";
// import styles from "./CustomNode.module.css";

import {
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  EllipsisVertical,
} from "lucide-react";
import { MODAL_TYPES, useModal } from "src/store/use-modal";
import { TypeIcon } from "./CustomDragPreview";

// export const CustomNode = (props) => {
//   const { id, droppable, data } = props.node;
//   const indent = props.depth * 24;

//   const handleToggle = (e) => {
//     e.stopPropagation();
//     props.onToggle(props.node.id);
//   };

//   const dragOverProps = useDragOver(id, props.isOpen, props.onToggle);

//   return (
//     <div
//       className={`tree-node ${styles.root}`}
//       style={{ paddingInlineStart: indent }}
//       {...dragOverProps}
//     >
//       <div
//         className={`${styles.expandIconWrapper} ${
//           props.isOpen ? styles.isOpen : ""
//         }`}
//       >
//         {props.node.droppable && (
//           <div onClick={handleToggle}>
//             <ArrowRightIcon />
//           </div>
//         )}
//       </div>
//       <div>
//         <TypeIcon droppable={droppable} fileType={data?.fileType} />
//       </div>
//       <div className={styles.labelGridItem}>
//         <Typography variant="body2">{props.node.text}</Typography>
//       </div>
//     </div>
//   );
// };

const IconParser = (src: string) => {
  return (
    <div>
      {src ? (
        <img
          src={src}
          alt="팀리더"
          width="40"
          height="40"
          className="rounded-full"
        />
      ) : (
        <CircleUserRound size={30} />
      )}
    </div>
  );
};

export default function CustomNode(props: any) {
  const {
    node: { id, droppable, text, data },
    depth,
    isOpen,
    onToggle,
  } = props;

  const indent = depth * 24;

  const openModal = useModal((state) => state.openModal);

  const handleClickOrganization = () => {
    openModal({
      type: MODAL_TYPES.UPDATE_TEAM,
      props: {
        id: id,
        name: text,
      },
    });
  };

  console.log(props, "오케이 프롭스");
  return (
    <div
      className="flex justify-start items-center gap-40 border-t border-b border-gray-200"
      style={{ paddingInlineStart: indent }}
    >
      {/* 팀명 */}
      <div
        style={{ marginLeft: depth * 10 }}
        className="flex px-20 py-8 gap-4 items-center flex-[3_3_0%]"
      >
        {droppable && (
          <span onClick={onToggle}>
            {isOpen ? <ChevronDown /> : <ChevronRight />}
          </span>
        )}

        <div>
          <TypeIcon droppable={droppable} fileType={data?.fileType} />
        </div>

        <div>
          <span className="font-semibold text-lg">{text}</span>
        </div>
      </div>

      {/* 팀 리더 */}
      <div className="flex justify-center items-center gap-4 flex-1">
        {data.leader && (
          <>
            <span>{IconParser(data.icon)}</span>
            <span>{data.leader}</span>
          </>
        )}
      </div>

      {/* 설정 */}
      <button className="flex-1" onClick={handleClickOrganization}>
        <EllipsisVertical />
      </button>
    </div>
  );
}
