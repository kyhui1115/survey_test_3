"use client";

import useReportStore from "@/_store/report";
import ItemTable from "./itemTable";
import ItemChart from "./itemChart";
import ItemGrade from "./itemGrade";
import ItemTextArea from "./itemTextArea";
import useGetTableData from "@/_api/_query/useGetTableData";
import EmptyMessage from "@/app/_components/emptyMessage";

interface props {
  no: number;
  reportId: string;
  title: string;
}

export default function ReportItem({ no, reportId, title }: props) {
  const { subjectId } = useReportStore();
  const { data: tableData } = useGetTableData(subjectId, reportId);

  return (
    <div className="relative flex border border-border-gray mt-4 p-2 rounded-md bg-white">
      <span className="absolute font-semibold top-4 left-4">
        {no}. {title}
      </span>
      {tableData?.length ? (
        <div className="flex w-full h-full pt-14 pb-2">
          <ItemTable subjectId={subjectId} reportId={reportId} />
          <ItemChart subjectId={subjectId} reportId={reportId} />
          <ItemGrade subjectId={subjectId} reportId={reportId} />
          <ItemTextArea />
        </div>
      ) : (
        <div className="w-full h-[250px] flex justify-center items-center">
          <EmptyMessage image="default" />
        </div>
      )}
    </div>
  );
}
