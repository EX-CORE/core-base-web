import { cn } from "src/lib/utils";
import { useSidebar } from "src/store/use-sidebar";

type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {
  const { toggle } = useSidebar();

  return (
    <aside
      className={cn(
        "bg-gray300 fixed left-0 w-72 h-full border-r z-50",
        !toggle && "w-16"
      )}
    >
      {children}
    </aside>
  );
}
