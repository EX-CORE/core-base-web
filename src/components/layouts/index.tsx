import { Outlet } from "react-router-dom";
import Container from "./Container";
import Sider from "./Sider";

export default function Layout() {
  return (
    <div className="w-full relative h-full max-w-[1500px] flex">
      <Sider />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
