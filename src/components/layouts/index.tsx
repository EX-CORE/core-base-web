import Header from "./Header";
import Sider from "./Sider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen bg-bodyGray">
      <div className="h-[10%]">
        <Header />
      </div>

      <div className="flex w-full h-[90%] gap-8">
        <div className="w-[15%] bg-white rounded-2xl">
          <Sider />
        </div>
        <div className="w-[85%] bg-white rounded-2xl">{children}</div>
      </div>
    </div>
  );
}
