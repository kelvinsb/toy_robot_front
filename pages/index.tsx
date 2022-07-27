import type { NextPage } from "next";
import { Layout, Row } from "antd";
import "../styles/Home.module.css";
import { Content, Header } from "antd/lib/layout/layout";
import TheBoard from "../components/TheBoard";

const Home: NextPage = () => {
  return (
    <Layout className="layout">
      <Header></Header>
      <Content style={{ padding: "50px 50px", height: "100%" }}>
        <Row gutter={[16, 16]}>
          <TheBoard />
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
