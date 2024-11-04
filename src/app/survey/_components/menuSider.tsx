"use client";

import useGetNavSd from "@/_api/_query/useGetNavSd";
import useIdStore from "@/_store/id";
import { ConfigProvider, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";

export default function MenuSider() {
  const { navHdId } = useIdStore();
  const { data: navSd } = useGetNavSd(navHdId);

  const menuItems = navSd?.map((nav) => ({
    key: nav.id,
    label: <Link href={nav.link}>{nav.label}</Link>,
  }));

  return (
    <Sider width={240}>
      <Menu defaultSelectedKeys={["1"]} className="h-full" items={menuItems} />
    </Sider>
  );
}
