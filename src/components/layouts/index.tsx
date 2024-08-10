import { Outlet } from "react-router-dom";
import Sider from "./Sider";

export default function Layout() {
  return (
    <div className="w-screen h-screen bg-bodyGray flex">
      <div className="w-[15%] bg-gray300 rounded-2xl">
        <Sider />
      </div>
      <div className="w-[85%] bg-white rounded-2xl">
        <Outlet />
      </div>
    </div>
  );
}
