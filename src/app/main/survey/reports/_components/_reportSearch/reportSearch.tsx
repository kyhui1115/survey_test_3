"use client";

import { Col } from "antd";
import SelectYearContainer from "./selectYearContainer";
import SubjectTableContainer from "./subjectTableContainer";

export default function ReportSearch() {
  return (
    <Col className="bg-white h-full w-full" span={3}>
      <div className="w-full h-full flex flex-col">
        <SelectYearContainer />
        <SubjectTableContainer />
      </div>
    </Col>
  );
}
