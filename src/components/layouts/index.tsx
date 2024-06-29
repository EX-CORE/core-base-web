import Header from "./Header";
import Sider from "./Sider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen">
      <div className="h-[15%]">
        <Header />
      </div>

      <div className="flex w-full h-[85%]">
        <div className="w-[20%] bg-gray-100">
          <Sider />
        </div>
        <div className="w-[80%]">{children}</div>
      </div>
    </div>
  );
}
