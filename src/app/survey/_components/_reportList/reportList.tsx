"use client";

import { Col } from "antd";
import ReportItem from "./reportItem";
import useGetReport from "@/_api/_query/useGetReport";
import useSubjectStore from "@/_store/subject";
import EmptyMessage from "../_common/emptyMessage";

export default function ReportList() {
  const { id } = useSubjectStore();
  const { data: surveys } = useGetReport(id);

  return (
    <Col className="pl-6 h-full" span={20}>
      <div className="border-y border-l border-border-gray rounded-l-md w-full h-full bg-white overflow-y-scroll px-6 shadow-container">
        {surveys?.length === 0 ? (
          <EmptyMessage image="default" />
        ) : (
          surveys?.[0]?.reports.map((report, idx) => (
            <ReportItem
              key={report.id}
              no={idx + 1}
              title={report.title}
              tables={report.tables}
              lastNo={surveys[0].reports.length}
            />
          ))
        )}
      </div>
    </Col>
  );
}
