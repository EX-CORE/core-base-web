import { useRef } from "react";
import { DialogContainer } from "src/components/ui/dialog";
import { Input } from "src/components/ui/input";
import {
  useCreateOrganization,
  OrganizationCreateReq,
} from "src/services/organization";
import { setCookie } from "src/lib/cookies";
import { useNavigate } from "react-router-dom";

export function AddOrganizationModal() {
  const navigate = useNavigate();

  const { mutateAsync, data, isSuccess } = useCreateOrganization();

  const organizationNameRef = useRef<HTMLInputElement>(null);
  const organizationLogoRef = useRef<HTMLInputElement>(null);

  const createOrganization = async (): Promise<void> => {
    // Get the current values from the refs
    const organizationName = organizationNameRef.current?.value;
    const organizationLogo = organizationLogoRef.current?.files?.[0];

    console.log("조직명:", organizationName);
    console.log("조직 프로필:", organizationLogo);
    if (organizationName) {
      const companyReq: OrganizationCreateReq = {
        name: organizationName,
        logo: organizationLogo,
      };
      try {
        const data = await mutateAsync(companyReq);
        console.log("조직 생성 성공:", data);
        setCookie("organizationId", data.id);
        navigate("/management/organization/info");
      } catch (error) {
        console.error("조직 생성 실패:", error);
        throw error;
      }
    }
  };

  return (
    <DialogContainer
      title="조직 추가하기"
      handleClickConfirm={createOrganization}
    >
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="organzationName" className="text-right">
            조직명
          </label>
          <Input
            id="organzationName"
            className="col-span-3"
            ref={organizationNameRef}
            placeholder="조직명을 입력해주세요"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="organzationLogo" className="text-right">
            조직 프로필
          </label>
          <Input
            id="organzationLogo"
            className="col-span-3"
            type="file"
            ref={organizationLogoRef}
          />
        </div>
      </div>
    </DialogContainer>
  );
}
