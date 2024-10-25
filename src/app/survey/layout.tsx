import { Layout, Row } from "antd";

interface props {
  children: React.ReactNode;
}

export default function SurveyLayout({ children }: props) {
  return <Row className="w-full h-full p-10 bg-white">{children}</Row>;
}
