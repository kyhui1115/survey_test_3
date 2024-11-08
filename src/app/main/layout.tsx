import { Layout } from "antd";
import Headers from "./_components/headers";
import { Content, Footer } from "antd/es/layout/layout";
import MenuSider from "./_components/menuSider";
import Tab from "./_components/tab";

interface props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: props) {
  return (
    <Layout className="w-full h-full">
      <Headers />
      <Layout hasSider={true}>
        <MenuSider />
        <Layout>
          <Tab />
          <Content className="bg-white w-full p-4 h-screen">{children}</Content>
        </Layout>
      </Layout>
      <Footer className="flex justify-center items-center h-8 p-0 bg-slate-100">
        Footer
      </Footer>
    </Layout>
  );
}
