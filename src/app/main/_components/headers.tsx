import { Header } from "antd/es/layout/layout";
import MenuHeader from "./menuHeader";
import Logo from "./Logo";

export default function Headers() {
  return (
    <Header className="flex p-0 bg-white border-b border-border-gray">
      <Logo />
      <MenuHeader />
    </Header>
  );
}
