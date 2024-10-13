import useScreenSize from "src/hooks/useScreenSize";
import { cn } from "src/lib/utils";
import { useSidebar } from "src/store/use-sidebar";

export default function Container({ children }: { children: React.ReactNode }) {
  // useScreenSize();

  // const { toggle } = useSidebar();

  return (
    <div
      className={cn(
        "flex-1 ml-72"
        //  toggle && "ml-16"
      )}
    >
      {children}
    </div>
  );
}
