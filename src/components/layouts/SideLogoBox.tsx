/* eslint-disable jsx-a11y/anchor-is-valid */
import { cn } from "src/lib/utils";
import React from "react";
import { CirclePlus, CircleX, SquarePlus } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import { Router, useLocation, useNavigate } from "react-router-dom";

import { Button } from "../Button";

import { useGetOrganizationList, List } from "../../services/profile";
import {
  useGetOrganization,
  OrganizationRes,
} from "../../services/organization";
import { MODAL_TYPES, useModal } from "src/store/use-modal";
import { getCookieValue, setCookie } from "src/lib/cookies";

export default function SideLogoBox() {
  const navigate = useNavigate();

  const { data: companyList } = useGetOrganizationList();
  const { data: company } = useGetOrganization(
    getCookieValue("organizationId")
  );

  const openModal = useModal((state) => state.openModal);

  const handleTestOpenModal = () => {
    openModal({
      type: MODAL_TYPES.ADD_ORGANIZATION,
    });
  };

  const navigateCompany = (organizationId: string) => {
    setCookie("organizationId", organizationId);
    navigate("/management/organization/info");
  };
  return (
    <div className={cn("flex items-center")}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-2 px-3 py-2">
              {company ? (
                <CompanyLogo
                  title={company.name}
                  content={company.logoFileName}
                />
              ) : (
                <CompanyLogo title="조직 없음" />
              )}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[300px] p-2 space-y-2">
                <li className="px-2 py-1">
                  {(companyList?.participationOrganizations?.length || 0) >
                  0 ? (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-500 px-2">
                        회사 목록
                      </div>
                      {companyList?.participationOrganizations?.map(
                        (companys) => (
                          <NavigationMenuLink
                            onClick={() => navigateCompany(companys.id)}
                            className="block hover:bg-gray-100 rounded-md transition-colors"
                          >
                            <div className="flex items-center p-2">
                              <CompanyLogo
                                title={companys.name}
                                content={companys.logo}
                              />
                            </div>
                          </NavigationMenuLink>
                        )
                      )}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 text-center py-2">
                      참여 중인 회사가 없습니다
                    </div>
                  )}
                </li>
                <Separator className="my-2" />
                <li className="px-2 py-1">
                  {(companyList?.invitedOrganizations?.length || 0) > 0 ? (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-500 px-2">
                        초대된 회사
                      </div>
                      {companyList?.invitedOrganizations.map(
                        (companys: List) => (
                          <div className="hover:bg-gray-100 rounded-md p-2">
                            <WaitingCompany
                              title={companys.name}
                              content={companys.logo}
                            />
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 text-center py-2">
                      초대 대기중
                    </div>
                  )}
                </li>
                <Separator className="my-2" />
                <li>
                  <NavigationMenuLink
                    onClick={handleTestOpenModal}
                    className="block hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <div className="flex items-center justify-center p-2">
                      <CompanyLogo title="조직 추가하기" />
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const CompanyLogo = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ title, content }, ref) => {
  return (
    <div className="flex items-center gap-2">
      {content == null || content === "" ? (
        <div className="text-gray-400">
          <SquarePlus size={24} />
        </div>
      ) : (
        <img
          src={content}
          alt={title}
          width={24}
          height={24}
          className="rounded-sm object-cover"
        />
      )}
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
});
const WaitingCompany = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ title, content }, ref) => {
  return (
    <div className="flex items-center justify-between">
      <CompanyLogo title={title} content={content} />
      <div className="flex gap-1">
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 hover:bg-green-50 hover:text-green-600"
        >
          <CirclePlus size={18} />
        </Button>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
        >
          <CircleX size={18} />
        </Button>
      </div>
    </div>
  );
});
