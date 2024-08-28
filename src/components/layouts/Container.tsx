import useScreenSize from "src/hooks/useScreenSize";
import { cn } from "src/lib/utils";

export default function Container({ children }: { children: React.ReactNode }) {
  useScreenSize();

  return <div className={cn("flex-1")}>{children}</div>;
}
