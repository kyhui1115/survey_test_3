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
      <Col className="pl-4 h-full" span={20}>
        <div className="border border-border-gray rounded-l-md w-full h-full overflow-y-scroll px-6 pb-6">
          <Spinner />
        </div>
      </Col>
    );
  }

  return (
    <Col className="pl-4 h-full" span={20}>
      <div className="border border-border-gray rounded-l-md w-full h-full overflow-y-scroll px-6 pb-6 pt-3">
        {reports?.length === 0 ? (
          <EmptyMessage image="default" />
        ) : (
          <>
            <span className="font-semibold text-lg">설문보고서</span>
            {reports?.map((report, idx) => (
              <ReportItem
                key={report.id}
                id={report.id}
                title={report.title}
                no={idx + 1}
              />
            ))}
          </>
        )}
      </div>
    </Col>
  );
}
