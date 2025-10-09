import { Outlet } from "react-router-dom";
import ModalManager from "src/providers/ModalManager";
import Container from "./Container";
import Sider from "./Sider";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Layout() {
  return (
    <div className="w-full relative h-full flex">
      <Sider />
      <DndProvider backend={HTML5Backend}>
        <Container>
          <Outlet />
          <ModalManager />
        </Container>
      </DndProvider>
    </div>
  );
}
