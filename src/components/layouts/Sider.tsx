import InfoBox from "./InfoBox";
import SideMenuList from "./SideMenuList";

export default function Sider() {
  return (
    <div className="flex flex-col justify-between h-full">
      <SideMenuList />
      <InfoBox />
    </div>
  );
}
