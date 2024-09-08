import { Button } from "src/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "src/components/ui/dialog";
import { Input } from "src/components/ui/input";
import { useModal } from "src/store/use-modal";

export function AddTeamModal() {
  const closeModal = useModal((state) => state.closeModal);

  const handleClick = () => {
    closeModal();
  };

  return (
    <Dialog defaultOpen>
      {/* <DialogTrigger asChild>
        <Button variant="outline">팀 추가하기</Button>
      </DialogTrigger> */}

      <DialogContent className="sm:max-w-[425px]">
        {/* 여기서부터는 개별화 {children} */}
        <DialogHeader>
          <DialogTitle>팀 추가하기</DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="teamName" className="text-right">
              팀 이름
            </label>
            <Input
              id="teamName"
              className="col-span-3"
              placeholder="팀 이름을 입력해주세요"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="teamLeader" className="text-right">
              팀 리더
            </label>
            <Input id="teamLeader" className="col-span-3" />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleClick}>취소</Button>
          <Button type="submit">추가</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
