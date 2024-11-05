"use client";

import useGetNavs from "@/_api/_query/useGetNavHd";
import useIdStore from "@/_store/id";
import { Menu } from "antd";
import Link from "next/link";

export default function MenuHeader() {
  const { navHdId, setNavHdId } = useIdStore();
  const { data: navHd } = useGetNavs();

  const menuItems = navHd?.map((nav) => ({
    key: nav.id,
    label: <Link href={nav.link}>{nav.label}</Link>,
  }));

  const menuHandler = (value: { key: string }) => {
    setNavHdId(value.key);
  };

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[navHdId]}
      items={menuItems}
      className="w-96"
      onClick={menuHandler}
    />
  );
}
