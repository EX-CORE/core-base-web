import useScreenSize from "src/hooks/useScreenSize";
import { cn } from "src/lib/utils";
import { useSidebar } from "src/store/use-sidebar";

export default function Container({ children }: { children: React.ReactNode }) {
  // useScreenSize();

  const { isOpen } = useSidebar();

  return (
    <div className={cn("flex-1 overflow-auto bg-white", !isOpen && "ml-20")}>
      {children}
    </div>
  );
}
