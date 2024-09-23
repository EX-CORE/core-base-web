import { Building, Cat } from "lucide-react";

export const TypeIcon = (props: any) => {
  if (props.droppable) {
    return <Building />;
  }

  switch (props.fileType) {
    case "organization":
      return <Cat />;
    case "image":
      return <Building />;
    case "text":
      return <Building />;
    default:
      return null;
  }
};

export default function CustomDragPreview(props: any) {
  const item = props.monitorProps.item;

  return (
    <div
      // className="flex items-center bg-blue-700 rounded-md shadow-lg shadow-black/25 shadow-black/8 text-white inline-grid text-sm gap-2 grid-cols-auto-auto p-1.5 pointer-events-none"
      style={{
        alignItems: "center",
        backgroundColor: "#1967d2",
        borderRadius: "4px",
        boxShadow:
          "0 12px 24px -6px rgba(0, 0, 0, .25), 0 0 0 1px rgba(0, 0, 0, .08)",
        color: "#fff",
        display: "inline-grid",
        fontSize: "14px",
        gap: "8px",
        gridTemplateColumns: "auto auto",
        padding: "4px 8px",
        pointerEvents: "none",
      }}
    >
      <div className="flex items-center">
        <TypeIcon droppable={item.droppable} fileType={item?.data?.fileType} />
      </div>
      <div className="flex items-center">{item.text}</div>
    </div>
  );
}
