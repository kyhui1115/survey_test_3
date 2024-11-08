"use client";

import useGetNavSd from "@/_api/_query/useGetNavSd";
import useNavIdStore from "@/_store/navId";
import useTabStore from "@/_store/tab";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import { useEffect } from "react";

export default function MenuSider() {
  const { navHdId, navSdId, setNavSdId } = useNavIdStore();
  const { tabs, setNewTab, addTab, activeKey, setActiveKey } = useTabStore();
  const { data: navSd } = useGetNavSd(navHdId);

  const menuItems = navSd?.map((nav) => ({
    key: nav.id,
    label: <Link href={nav.link}>{nav.label}</Link>,
  }));

  const menuHandler = (value: { key: string }) => {
    const selectedTab = tabs.find((tab) => tab.key === value.key);

    if (selectedTab) {
      setActiveKey(value.key);
    } else {
      const newTab = navSd?.find((nav) => nav.id === value.key);
      if (newTab) {
        setNewTab({ key: newTab.id, label: newTab.label, link: newTab.link });
        addTab();
      }
    }
  };

  useEffect(() => {
    setNavSdId(activeKey);
  }, [activeKey]);

  return (
    <Sider className="bg-slate-600">
      <Menu
        selectedKeys={[navSdId]}
        onClick={menuHandler}
        className="bg-slate-600"
        items={menuItems}
        theme="dark"
      />
    </Sider>
  );
}
