"use client";

import useGetNavSd from "@/_api/_query/useGetNavSd";
import useNavIdStore from "@/_store/navId";
import useTabStore from "@/_store/tab";
import EmptyMessage from "@/app/_components/emptyMessage";
import Spinner from "@/app/_components/spinner";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import { useEffect } from "react";

export default function MenuSider() {
  const { navHdId, navSdId, setNavSdId } = useNavIdStore();
  const { tabs, setNewTab, addTab, activeKey, setActiveKey } = useTabStore();
  const { data: navSd, isLoading } = useGetNavSd(navHdId);

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
    <Sider width={240} className="bg-slate-700">
      {isLoading ? (
        <Spinner />
      ) : (
        <Menu
          selectedKeys={[navSdId]}
          onClick={menuHandler}
          className="h-full border-r border-border-gray bg-slate-700"
          items={menuItems}
          theme="dark"
        />
      )}
    </Sider>
  );
}
