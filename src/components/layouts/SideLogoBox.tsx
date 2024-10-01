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

import { useGetCompanyList, List } from "../../services/profile";
import { useGetCompany, OrganizationRes } from "../../services/organization";
import { MODAL_TYPES, useModal } from "src/store/use-modal";
import { getCookieValue, setCookie } from "src/lib/cookies";

export default function SideLogoBox() {
  const navigate = useNavigate();

  const { data: companyList } = useGetCompanyList();
  const { data: company } = useGetCompany(getCookieValue("organizationId"));

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
    <div className={cn("flex items-center gap-4")}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <>
                {company ? (
                  <>
                    <CompanyLogo
                      title={company.name}
                      content={company.logoFileName}
                    ></CompanyLogo>
                  </>
                ) : (
                  <CompanyLogo title="조직 없음"></CompanyLogo>
                )}
              </>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[400px] ">
                <li>
                  <div className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none ">
                    <>
                      {(companyList?.participationOrganizations?.length || 0) >
                      0 ? (
                        <div>
                          <div className="text-sm font-medium leading-none">
                            회사 목록
                          </div>
                          {companyList?.participationOrganizations?.map(
                            (companys) => (
                              <NavigationMenuLink
                                onClick={() => navigateCompany(companys.id)}
                              >
                                <div className="block flex select-none space-y-1 rounded-md p-3">
                                  <CompanyLogo
                                    title={companys.name}
                                    content={companys.logo}
                                  ></CompanyLogo>
                                </div>
                              </NavigationMenuLink>
                            )
                          )}
                        </div>
                      ) : (
                        <div className="block flex justfy-center">
                          참여 중인 회사가 없습니다
                        </div>
                      )}
                    </>
                  </div>
                </li>
                <Separator />
                <li>
                  <NavigationMenuLink>
                    <div className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none ">
                      <>
                        {(companyList?.invitedOrganizations?.length || 0) >
                        0 ? (
                          <>
                            {companyList?.invitedOrganizations.map(
                              (companys: List) => (
                                <div>
                                  <div className="text-sm font-medium leading-none">
                                    회사 목록
                                  </div>
                                  <div className="block flex select-none space-y-1 rounded-md p-3 ">
                                    <WaitingCompany
                                      title={companys.name}
                                      content={companys.logo}
                                    ></WaitingCompany>
                                  </div>
                                </div>
                              )
                            )}
                          </>
                        ) : (
                          <div className="block flex justfy-center">
                            초대 대기중
                          </div>
                        )}
                      </>
                    </div>
                  </NavigationMenuLink>
                </li>
                <Separator />
                <li>
                  <NavigationMenuLink onClick={handleTestOpenModal}>
                    <div className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none ">
                      <div className="block flex select-none space-y-1 rounded-md p-3 justify-center">
                        <CompanyLogo title={"조직 추가하기"}></CompanyLogo>
                      </div>
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
    <>
      {content == null || content === "" ? (
        <div className="mr-2">
          <SquarePlus />
        </div>
      ) : (
        <img
          src={content}
          className="mr-2"
          alt={title}
          width={30}
          height={30}
        />
      )}
      <p className="text-1 font-semibold">{title}</p>
    </>
  );
});

const WaitingCompany = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ title, content }, ref) => {
  return (
    <>
      <CompanyLogo title={title} content={content}></CompanyLogo>
      <Button variant={"ghost"}>
        <CirclePlus />
      </Button>
      <Button variant={"ghost"}>
        <CircleX />
      </Button>
    </>
  );
});
