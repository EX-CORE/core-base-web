import HeaderNavbar from "./HeaderNavbar";
import LogoBox from "./LogoBox";

export default function Header() {
  return (
    <div className="flex">
      <LogoBox companyName="hurayPositive" />
      <HeaderNavbar />
    </div>
  );
}
