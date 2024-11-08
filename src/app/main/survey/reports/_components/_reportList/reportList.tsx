"use client";

import { Col } from "antd";
import ReportItem from "./reportItem";
import useGetReports from "@/_api/_query/useGetReports";
import Spinner from "@/app/_components/spinner";
import EmptyMessage from "@/app/_components/emptyMessage";

export default function ReportList() {
  const { data: reports, isLoading } = useGetReports();

  if (isLoading) {
    return (
      <Col className="pl-4 h-full" span={21}>
        <div className="border border-border-gray rounded-l-md w-full h-full overflow-y-scroll px-6 pb-6">
          <Spinner />
        </div>
      </Col>
    );
  }

  return (
    <Col className="pl-4 h-full" span={21}>
      <div className="border border-border-gray rounded-l-md w-full h-full flex flex-col">
        <span className="font-semibold pl-4 flex items-center h-10 rounded-t-md">
          설문보고서
        </span>
        <div className="w-full h-full overflow-y-scroll border-t border-border-gray px-6 pb-6 bg-gray-50 rounded-l-md">
          {reports?.length === 0 ? (
            <EmptyMessage image="default" />
          ) : (
            <>
              {reports?.map((report, idx) => (
                <ReportItem
                  key={report.id}
                  reportId={report.id}
                  title={report.title}
                  no={idx + 1}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </Col>
  );
}
