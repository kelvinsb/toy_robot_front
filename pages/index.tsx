import type { NextPage } from "next";
import { Layout, Row } from "antd";
import "../styles/Home.module.css";
import { Content, Header } from "antd/lib/layout/layout";
import TheBoard from "../components/TheBoard";
import Instructions from "../components/Instructions";

const Home: NextPage = () => {
  return (
    <Layout className="layout" style={{ height: "100vh" }}>
      <Header style={{ color: "#FFF" }}>Toy Robot simulator</Header>
      <Content style={{ padding: "25px", height: "100%" }}>
        <Instructions />
        <Row gutter={[16, 16]}>
          <TheBoard />
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
