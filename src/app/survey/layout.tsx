import { Layout } from "antd";
import Headers from "./_components/headers";
import { Content, Footer } from "antd/es/layout/layout";
import MenuSider from "./_components/menuSider";

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
          <Content className="bg-white w-full p-4 h-10 border border-border-gray rounded-md">
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
