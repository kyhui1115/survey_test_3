import ReportSearch from "./_components/_reportSearch/reportSearch";
import ReportList from "./_components/_reportList/reportList";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Col } from "antd";

export default function Page() {
  return (
    <>
      <Col className="bg-white h-full w-full" span={4}>
        <ReportSearch />
      </Col>
      <Col className="pl-10" span={20}>
        <ReportList />
      </Col>
    </>
  );
}
