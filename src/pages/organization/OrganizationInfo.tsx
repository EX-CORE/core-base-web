import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import DaumPostcode from "react-daum-postcode";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { getCookieValue, setCookie } from "src/lib/cookies";
import {
  useGetOrganization,
  OrganizationRes,
  useUpdateOrganization,
  OrganizationCreateReq,
} from "../../services/organization";
import { MODAL_TYPES, useModal } from "src/store/use-modal";

function OrganizationInfo() {
  const organizationNameRef = useRef<HTMLInputElement>(null);
  const organizationLogoRef = useRef<HTMLInputElement>(null);
  const organizationCeoRef = useRef<HTMLInputElement>(null);
  const organizationTelRef = useRef<HTMLInputElement>(null);

  const { data: organization } = useGetOrganization(
    getCookieValue("organizationId")
  );

  useEffect(() => {
    setAddress(organization?.address);
  }, [organization]);

  const { mutateAsync, data, isSuccess } = useUpdateOrganization(
    getCookieValue("organizationId")
  );

  const openModal = useModal((state) => state.openModal);
  const handleTestOpenModal = () => {
    openModal({
      type: MODAL_TYPES.SEARCH_ADDRESS,
      props: { setAddress },
    });
  };
  console.log(organization);
  const [address, setAddress] = useState(organization?.address);

  const updateOrganization = async () => {
    const organizationName = organizationNameRef.current?.value;
    const organizationLogo = organizationLogoRef.current?.files?.[0];
    const organizationCeo = organizationCeoRef.current?.value;
    const organizationTel = organizationTelRef.current?.value;

    const companyReq: OrganizationCreateReq = {
      name: organizationName || "",
      logo: organizationLogo,
      ceo: organizationCeo,
      telNumber: organizationTel,
      address: address,
    };

    const result = await mutateAsync(companyReq);
    console.log(result);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="ml-20 mt-10 mb-5"></div>

        <div className="flex flex-row gap-5 mb-5 ">
          <label
            htmlFor="organzationName"
            className="basis-1/6 text-right content-center"
          >
            조직명
          </label>
          <div className="basis-1/4 text-center">
            <Input
              id="organzationName"
              value={organization?.name}
              ref={organizationNameRef}
              placeholder="조직명을 입력해주세요"
            />
          </div>
        </div>

        <div className="flex flex-row gap-5 mb-5">
          <label
            htmlFor="organzationLogo"
            className="basis-1/6 text-right content-center"
          >
            조직 프로필
          </label>
          <div className="basis-1/4 text-center">
            <Input id="organzationLogo" type="file" ref={organizationLogoRef} />
          </div>
        </div>

        <div className="flex flex-row gap-5 mb-5">
          <label htmlFor="ceo" className="basis-1/6 text-right content-center">
            대표자명
          </label>
          <div className="basis-1/4 text-center">
            <Input
              id="ceo"
              type="text"
              value={organization?.ceo}
              ref={organizationCeoRef}
              placeholder="대표자명을 입력해주세요"
            />
          </div>
        </div>

        <div className="flex flex-row gap-5 mb-5">
          <label
            htmlFor="telNumber"
            className="basis-1/6 text-right content-center"
          >
            대표번호
          </label>
          <div className="basis-1/4 text-center">
            <Input
              id="telNumber"
              type="tel"
              value={organization?.telNumber}
              ref={organizationTelRef}
              placeholder="00-000-0000"
            />
          </div>
        </div>
        <div className="flex flex-row gap-5 mb-5">
          <label
            htmlFor="address"
            className="basis-1/6 text-right content-center"
          >
            주소
          </label>
          <div className="basis-1/4 text-center">
            <Input
              onClick={handleTestOpenModal}
              id="address"
              type="text"
              value={address}
              placeholder="회사 주소를 입력해주세요"
            />
          </div>
          <div className="flex flex-row gap-5 mb-5 ">
            <div className="basis-1/4 text-center">
              <Button onClick={() => updateOrganization()}> 저장 </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationInfo;
