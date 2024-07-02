import { cn } from "src/lib/utils";

type Props = {
  className?: string;
  companyName: string;
};

export default function LogoBox({ className, companyName }: Props) {
  return (
    <div className={cn("flex h-full items-center ml-4 gap-4", className)}>
      <img src="/logo192.png" alt={companyName} width={50} height={50} />
      <p className="text-1 font-semibold">{companyName}</p>
    </div>
  );
}
