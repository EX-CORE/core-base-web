import { cn } from "src/lib/utils";

type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {

  return (
    <aside
      className={cn(
        "relative h-full transition-all duration-300, border-[0px_1px_0px_0px] border-slate-300 border-solid inset-0 "
      )}
    >
      {children}
    </aside>
  );
}
