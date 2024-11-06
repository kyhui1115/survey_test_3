"use client";

import { useState } from "react";

import ItemTable from "./itemTable";
import ItemChart from "./itemChart";
import useGetTables from "@/_api/_query/useGetTables";

import { Skeleton } from "antd";
import useGetTableHeaders from "@/_api/_query/useGetTableHeaders";

interface props {
  no: number;
  id: string;
  title: string;
}

export default function ReportItem({ no, id, title }: props) {
  const [tableHeight, setTableHeight] = useState(0);

  const { data: tables, isLoading } = useGetTables(id);
  const { data: tableHeaders } = useGetTableHeaders(id);

  if (isLoading) {
    return (
      <div className="relative flex border border-border-gray mt-4 p-6 rounded-md bg-white items-center">
        <Skeleton active />
      </div>
    );
  }

  return (
    <div className="relative flex border border-border-gray mt-4 p-2 rounded-md bg-white">
      <span className="absolute font-semibold top-4 left-4">
        {no}. {title}
      </span>
      <div className="flex w-full h-full pt-14 pb-2">
        <ItemTable
          tables={tables}
          tableHeaders={tableHeaders}
          setTableHeight={setTableHeight}
        />
        <ItemChart tables={tables} tableHeight={tableHeight} />
      </div>
    </div>
  );
}
