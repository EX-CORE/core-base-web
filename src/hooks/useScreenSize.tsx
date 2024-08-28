import { useEffect, useState } from "react";
import { useSidebar } from "src/store/use-sidebar";

export default function useScreenSize() {
  const { toggle, onToggle } = useSidebar();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      // lg = 1024px
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // 모바일 화면일 때는 사이드바가 열려있는 상태로 시작
    if ((isMobile && toggle) || (!isMobile && !toggle)) {
      onToggle();
    }
  }, [isMobile]);
}
