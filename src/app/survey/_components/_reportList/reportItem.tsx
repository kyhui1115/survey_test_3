"use client";

import { useState } from "react";
import { table } from "@/_api/_query/useGetReport";
import ItemTable from "./itemTable";
import ItemChart from "./itemChart";

interface props {
  no: number;
  title: string;
  tables: table[];
}

export default function ReportItem({ no, title, tables }: props) {
  const [tableHeight, setTableHeight] = useState(0);

  return (
    <div className="relative flex border border-border-gray mt-6 p-2 rounded-md bg-white shadow-container">
      <span className="absolute font-semibold top-4 left-4">
        {no}. {title}
      </span>
      <div className="flex w-full h-full pt-12 pb-8">
        <ItemTable tables={tables} setTableHeight={setTableHeight} />
        <ItemChart tables={tables} tableHeight={tableHeight} />
      </div>
    </div>
  );
}
