"use client";

import useNavIdStore from "@/_store/navId";
import useReportIdStore from "@/_store/reportId";
import useTabStore from "@/_store/tab";
import { Tabs } from "antd";
import { useRouter } from "next/navigation";

type targetKey = React.MouseEvent | React.KeyboardEvent | string;

export default function Tab() {
  const router = useRouter();
  const { tabs, activeKey, setTabs, addTab, setActiveKey } = useTabStore();
  const { setNavSdId } = useNavIdStore();
  const { resetYearAndSubjectId } = useReportIdStore();

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

    if (newTabs.length === 0) {
      router.push("/main");
      setNavSdId("0");
    }

    if (targetKey === "1") {
      resetYearAndSubjectId();
    }

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
    <Tabs
      hideAdd
      onChange={onChange}
      activeKey={activeKey}
      type="editable-card"
      onEdit={onEdit}
      items={tabs}
      tabBarGutter={0}
      className="h-10 bg-slate-300 pt-0.5"
    />
  );
}