import { cn } from "src/lib/utils";
import { Button } from "../ui/button";
import { useGetUserInfo } from "src/services/profile";

type Props = {
  className?: string;
};

export default function SideInfoBox({ className }: Props) {
  const { data: userInfo } = useGetUserInfo();

  const { name, icon, email } = {
    name: userInfo?.name,
    icon: (
      <img
        src={userInfo?.profile}
        className="rounded-full border w-10 h-10 bg-green-400"
      />
    ),
    email: userInfo?.email,
  };

  return (
    <div className={cn(className)}>
      <div>
        <div className="flex gap-4 items-center">
          <span>{icon}</span>
          <span>{name} 님</span>
        </div>
        <div className="mb-5">{email}</div>
      </div>

      <Button>로그아웃</Button>
    </div>
  );
}
