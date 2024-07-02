import { Button } from "../ui/button";

export default function InfoBox() {
  return (
    <div>
      <div>
        <div>
          <span>홍길동 님</span>
          <span>아이콘</span>
        </div>
        <div>shongs27@naver.com</div>
      </div>

      <Button>계정설정</Button>
      <Button>리뷰어로 전환하기</Button>
    </div>
  );
}
