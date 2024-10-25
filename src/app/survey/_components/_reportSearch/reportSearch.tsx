"use client";

import { Select } from "antd";

export default function ReportSearch() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const options = [
    { label: <span className="text-xs">2024</span>, value: "2024" },
    { label: <span className="text-xs">2023</span>, value: "2023" },
    { label: <span className="text-xs">2022</span>, value: "2022" },
    { label: <span className="text-xs">2021</span>, value: "2021" },
  ];

  return (
    <div className="border-r border-r-border-gray w-full h-full pr-10">
      <div className="border border-border-gray rounded-md w-full h-10 flex items-center justify-between px-2">
        <span className="text-xs">설문응답연도</span>
        <Select
          defaultValue="2024"
          onChange={handleChange}
          options={options}
          size="small"
        />
      </div>
    </div>
  );
}
