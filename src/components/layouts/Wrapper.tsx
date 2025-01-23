import { cn } from "src/lib/utils";
import { useSidebar } from "src/store/use-sidebar";

type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {
  const { isOpen, temporaryOpen } = useSidebar();

  return (
    <aside
      className={cn(
        "bg-gray300 absolute left-0 w-72 h-full border-r z-50",
        !isOpen && !temporaryOpen && "w-16"
      )}
    >
      {children}
    </aside>
  );
}
