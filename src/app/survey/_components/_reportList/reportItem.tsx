"use client";

import { useState } from "react";
import { table } from "@/_api/_query/useGetReport";
import ItemTable from "./itemTable";
import ItemChart from "./itemChart";

interface props {
  no: number;
  title: string;
  tables: table[];
  lastNo: number;
}

export default function ReportItem({ no, title, tables, lastNo }: props) {
  const [tableHeight, setTableHeight] = useState(0);

  return (
    <div
      className={`relative flex border-b border-border-gray ${
        no === lastNo ? "" : "border-b border-border-gray"
      }`}
    >
      <span className="absolute font-semibold top-4">
        {no}. {title}
      </span>
      <div className="flex w-full h-full pt-14 pb-10">
        <ItemTable tables={tables} setTableHeight={setTableHeight} />
        <ItemChart tables={tables} tableHeight={tableHeight} />
      </div>
    </div>
  );
}