"use client";

import useTabStore from "@/_store/tab";
import { Tabs } from "antd";

type targetKey = React.MouseEvent | React.KeyboardEvent | string;

export default function Tab() {
  const { tabs, activeKey, setTabs, addTab, setActiveKey } = useTabStore();

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const remove = (targetKey: targetKey) => {
    const targetIndex = tabs.findIndex((tab) => tab.key === targetKey);
    const newPanes = tabs.filter((tab) => tab.key !== targetKey);

    if (newPanes.length && targetKey === activeKey) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ];
      setActiveKey(key);
    }

    setTabs(newPanes);
  };

  const onEdit = (targetKey: targetKey, action: "add" | "remove") => {
    if (action === "add") {
      addTab();
    } else {
      remove(targetKey);
    }
  };

  return (
    <Tabs
      hideAdd
      onChange={onChange}
      activeKey={String(activeKey)}
      type="editable-card"
      onEdit={onEdit}
      items={tabs}
    />
  );
}
