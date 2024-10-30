"use client";

import { Col } from "antd";
import ReportItem from "./reportItem";
import useGetReport from "@/_api/_query/useGetReport";
import useSubjectStore from "@/_store/subject";
import EmptyMessage from "../_common/emptyMessage";
import Spinner from "../_common/spinner";

export default function ReportList() {
  const { id } = useSubjectStore();
  const { data: surveys, isLoading } = useGetReport(id);

  if (isLoading) {
    return (
      <Col className="pl-6 h-full" span={20}>
        <div className="border border-border-gray rounded-l-md w-full h-full bg-gray-50 overflow-y-scroll px-6 shadow-container pb-6">
          <Spinner />
        </div>
      </Col>
    );
  }

  return (
    <Col className="pl-6 h-full" span={20}>
      <div className="border border-border-gray rounded-l-md w-full h-full bg-gray-50 overflow-y-scroll px-6 shadow-container pb-6 pt-3">
        <span className="font-semibold text-lg">설문보고서</span>
        {surveys?.length === 0 ? (
          <EmptyMessage image="default" />
        ) : (
          surveys?.[0]?.reports.map((report, idx) => (
            <ReportItem
              key={report.id}
              no={idx + 1}
              title={report.title}
              tables={report.tables}
            />
          ))
        )}
      </div>
    </Col>
  );
}
