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
      <Layout>
        <MenuSider />
        <Layout>
          <Tab />
          <Content className="bg-white w-full h-10 p-4">{children}</Content>
        </Layout>
      </Layout>
      <Footer className="flex justify-center items-center h-8 p-0 bg-slate-400 text-white">
        Footer
      </Footer>
    </Layout>
  );
}