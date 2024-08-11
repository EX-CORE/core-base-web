import { Outlet } from "react-router-dom";
import Container from "./Container";
import Sider from "./Sider";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex">
      <Sider />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
