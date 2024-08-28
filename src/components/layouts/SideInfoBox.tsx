import { cn } from "src/lib/utils";
import { Button } from "../ui/button";

type Props = {
  className?: string;
};

export default function SideInfoBox({ className }: Props) {
  const { name, icon, email } = {
    name: "홍길동",
    icon: <div className="rounded-full border w-8 h-8 bg-green-400" />,
    email: "shongs27@huray.net",
  };

  return (
    <div className={cn(className)}>
      <div>
        <div className="flex gap-4 items-center">
          <span>{icon}</span>
          <span>{name} 님</span>
        </div>

        <div>{email}</div>
      </div>

      <Button>로그아웃</Button>
    </div>
  );
}
