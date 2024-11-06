"use client";

import useGetNavs from "@/_api/_query/useGetNavHd";
import useNavIdStore from "@/_store/navId";
import useReportIdStore from "@/_store/report";
import useTabStore from "@/_store/tab";
import { ConfigProvider, Menu } from "antd";
import Link from "next/link";

export default function MenuHeader() {
  const { navHdId, setNavHdId, setNavSdId } = useNavIdStore();
  const { setActiveKey } = useTabStore();
  const { setTabs } = useTabStore();
  const { resetYearAndSubjectId } = useReportIdStore();
  const { data: navHd } = useGetNavs();

  const menuItems = navHd?.map((nav) => ({
    key: nav.id,
    label: <Link href={nav.link}>{nav.label}</Link>,
  }));

  const menuHandler = (value: { key: string }) => {
    setNavHdId(value.key);
    setTabs([]);
    setNavSdId("0");
    setActiveKey("0");
    resetYearAndSubjectId();
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {},
        },
      }}
    >
      <Menu
        mode="horizontal"
        selectedKeys={[navHdId]}
        items={menuItems}
        className="w-96 bg-slate-100"
        onClick={menuHandler}
      />
    </ConfigProvider>
  );
}
