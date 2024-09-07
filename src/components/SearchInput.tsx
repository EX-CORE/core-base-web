import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "src/components/ui/input";

export default function SearchInput() {
  const [isClicked, setIsClicked] = useState(false);

  const [text, setText] = useState<string>();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let timer = timerRef.current;

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      // 검색 ajax 요청, e.target.value로 검색어 전달
    }, 2000);

    setText(e.target.value);
  };

  useEffect(() => {
    const outSideEvent = (e: any) => {
      const target = e.target as HTMLElement;

      if (target.isConnected && !target.closest(".searchContainer")) {
        setIsClicked(false);
      }
    };

    document.addEventListener("click", outSideEvent);

    return () => {
      document.removeEventListener("click", outSideEvent);
    };
  }, []);

  return (
    <>
      {isClicked ? (
        <div className="searchContainer">
          <Input
            placeholder="팀 명으로 검색"
            value={text}
            onChange={handleChange}
          />
        </div>
      ) : (
        <Search onClick={() => setIsClicked(true)} />
      )}
    </>
  );
}
