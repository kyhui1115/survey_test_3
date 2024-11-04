"use client";

import { Col } from "antd";
import ReportItem from "./reportItem";
import useGetReports from "@/_api/_query/useGetReports";
import EmptyMessage from "../../../../_components/emptyMessage";
import Spinner from "../../../../_components/spinner";
import useIdStore from "@/_store/id";

export default function ReportList() {
  const { subjectId } = useIdStore();
  const { data: reports, isLoading } = useGetReports(subjectId);

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
