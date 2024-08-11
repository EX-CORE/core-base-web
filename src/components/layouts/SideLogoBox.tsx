import { cn } from "src/lib/utils";

export default function SideLogoBox() {
  const companyName = "휴레이포지티브";

  return (
    <div className={cn("flex items-center gap-4")}>
      <img src="/logo192.png" alt={companyName} width={50} height={50} />
      <p className="text-1 font-semibold">{companyName}</p>
    </div>
  );
}
