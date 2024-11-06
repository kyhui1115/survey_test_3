"use client";

import useTabStore from "@/_store/tab";
import { Tabs } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { clearTabInfo } from "../../../_utils/clearTabInfo";
import { routerEmptyTab } from "../../../_utils/routerEmptyTab";

export type targetKey = React.MouseEvent | React.KeyboardEvent | string;

export default function Tab() {
  const router = useRouter();
  const pathname = usePathname();

  const { tabs, activeKey, setTabs, addTab, setActiveKey } = useTabStore();

  const onChange = (key: string) => {
    setActiveKey(key);

    const tab = tabs.find((tab) => tab.key === key);

    if (tab) {
      router.push(tab.link);
    }
  };

  const remove = (targetKey: targetKey) => {
    const targetIndex = tabs.findIndex((tab) => tab.key === targetKey);
    const newTabs = tabs.filter((tab) => tab.key !== targetKey);

    clearTabInfo(targetKey);
    routerEmptyTab(newTabs.length, router, pathname);

    if (newTabs.length && targetKey === activeKey) {
      const { key } =
        newTabs[targetIndex === newTabs.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);

      const tab = tabs.find((tab) => tab.key === key);

      if (tab) {
        router.push(tab.link);
      }
    }

    setTabs(newTabs);
  };

  const onEdit = (targetKey: targetKey, action: "add" | "remove") => {
    if (action === "add") {
      addTab();
    } else {
      remove(targetKey);
    }
  };

  return (
    <div className="w-full h-10 bg-white">
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        items={tabs}
        tabBarGutter={0}
        className="bg-slate-300 h-10"
      />
    </div>
  );
}
