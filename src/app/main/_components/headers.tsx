import { Header } from "antd/es/layout/layout";
import MenuHeader from "./menuHeader";
import Logo from "./Logo";

export default function Headers() {
  return (
    <Header className="flex p-0 border-b border-border-gray bg-slate-100">
      <Logo />
      <MenuHeader />
    </Header>
  );
}
