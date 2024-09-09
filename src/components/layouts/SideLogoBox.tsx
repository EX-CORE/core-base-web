/* eslint-disable jsx-a11y/anchor-is-valid */
import { cn } from "src/lib/utils";
import React from "react";
import { CirclePlus, CircleX } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";

import { Button } from "../Button";

export default function SideLogoBox() {
  const companyName = "휴레이포지티브";

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
  ];
  return (
    <div className={cn("flex items-center gap-4")}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <CompanyLogo title={companyName}></CompanyLogo>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[400px] ">
                <li>
                  <NavigationMenuLink>
                    <div className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none ">
                      <div className="text-sm font-medium leading-none">
                        회사 목록
                      </div>
                      <div className="block flex select-none space-y-1 rounded-md p-3">
                        <CompanyLogo title={"조직 추가하기"}></CompanyLogo>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </li>
                <Separator />
                <li>
                  <NavigationMenuLink>
                    <div className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none ">
                      <div className="text-sm font-medium leading-none">
                        초대 대기중
                      </div>
                      <div className="block flex select-none space-y-1 rounded-md p-3 ">
                        <WaitingCompany title={companyName}></WaitingCompany>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </li>
                <Separator />
                <li>
                  <NavigationMenuLink>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const CompanyLogo = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ title }, ref) => {
  return (
    <>
      <img
        src="/logo192.png"
        className="mr-2"
        alt={title}
        width={30}
        height={30}
      />
      <p className="text-1 font-semibold">{title}</p>
    </>
  );
});

const WaitingCompany = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ title }, ref) => {
  return (
    <>
      <CompanyLogo title={title}></CompanyLogo>
      <Button variant={"ghost"}>
        <CirclePlus />
      </Button>
      <Button variant={"ghost"}>
        <CircleX />
      </Button>
    </>
  );
});
