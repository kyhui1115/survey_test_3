"use client";

import { Col } from "antd";
import SelectYearContainer from "./selectYearContainer";
import SubjectTableContainer from "./subjectTableContainer";

export default function ReportSearch() {
  return (
    <Col className="bg-white h-full w-full" span={4}>
      <div className="border-r border-r-border-gray w-full h-full flex flex-col pr-6">
        <SelectYearContainer />
        <SubjectTableContainer />
      </div>
    </Col>
  );
}
