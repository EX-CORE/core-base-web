import InfoBox from "./InfoBox";
import LogoBox from "./LogoBox";
import SideMenuList from "./SideMenuList";

export default function Sider() {
  return (
    <div className="flex flex-col h-full p-4 relative">
      <LogoBox />
      <SideMenuList />

      <InfoBox className="absolute bottom-4" />
    </div>
  );
}
