import { cn } from "src/lib/utils";
import { Button } from "../ui/button";

type Props = {
  className?: string;
};

export default function InfoBox({ className }: Props) {
  return (
    <div className={cn(className)}>
      <div>
        <div>
          <span>홍길동 님</span>
          <span>아이콘</span>
        </div>
        <div>shongs27@naver.com</div>
      </div>

      <Button>로그아웃</Button>
    </div>
  );
}
