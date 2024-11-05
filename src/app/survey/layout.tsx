import { Layout } from "antd";
import Headers from "./_components/headers";
import { Content, Footer } from "antd/es/layout/layout";
import MenuSider from "./_components/menuSider";
import Tab from "./_components/tab";

interface props {
  children: React.ReactNode;
}

export default function SurveyLayout({ children }: props) {
  return (
    <Layout className="w-full h-full">
      <Headers />
      <Layout>
        <MenuSider />
        <Layout className="p-4">
          <Tab />
          <Content className="bg-white w-full p-4 h-10 border-x border-b border-border-gray rounded-b-md">
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer className="flex justify-center items-center h-8 p-0 bg-gray-700 text-white">
        Footer
      </Footer>
    </Layout>
  );
}
