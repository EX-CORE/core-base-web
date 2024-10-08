import { Dispatch, SetStateAction, useRef } from "react";
import { DialogContainer } from "src/components/ui/dialog";
import { Input } from "src/components/ui/input";
import { setCookie } from "src/lib/cookies";
import { useNavigate } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import { useModal } from "src/store/use-modal";

export function SearchAddressModal(props: {
  setAddress: Dispatch<SetStateAction<string>>;
}) {
  const { closeModal } = useModal();
  const searchAddress = (data: any) => {
    const { address } = data;
    props.setAddress(address);
    closeModal();
  };

  return (
    <DialogContainer title="주소 검색" useConfirm={false}>
      <div className="grid gap-4 py-4">
        <DaumPostcode onComplete={searchAddress}></DaumPostcode>
      </div>
    </DialogContainer>
  );
}
