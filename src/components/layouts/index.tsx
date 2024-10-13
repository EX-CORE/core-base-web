import { Outlet } from "react-router-dom";
import ModalManager from "src/providers/ModalManager";
import Container from "./Container";
import Sider from "./Sider";

export default function Layout() {
  return (
    <div className="w-full relative h-full flex">
      <Sider />
      <Container>
        <Outlet />
        <ModalManager />
      </Container>
    </div>
  );
}
