import HeaderNavbar from "./HeaderNavbar";
import LogoBox from "./LogoBox";

export default function Header() {
  return (
    <div className="flex h-full">
      <div className="basis-1/4 h-full">
        <LogoBox companyName="hurayPositive" />
      </div>
      <div className="basis-3/4 h-full">
        <HeaderNavbar />
      </div>
    </div>
  );
}
