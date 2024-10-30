"use client";

import { useState } from "react";
import { table } from "@/_api/_query/useGetReport";
import ItemTable from "./itemTable";
import ItemChart from "./itemChart";
import useDelayChart from "@/_hooks/useDelayChart";

interface props {
  no: number;
  title: string;
  tables: table[];
}

export default function ReportItem({ no, title, tables }: props) {
  const [tableHeight, setTableHeight] = useState(0);

  const showChart = useDelayChart(tables);

  return (
    <div className="relative flex border-b border-border-gray">
      <span className="absolute font-semibold top-4">
        {no}. {title}
      </span>
      <div className="flex w-full h-full pt-14 pb-10">
        <ItemTable tables={tables} setTableHeight={setTableHeight} />
        {showChart && <ItemChart tables={tables} tableHeight={tableHeight} />}
      </div>
    </div>
  );
}
