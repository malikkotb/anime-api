import React from "react";
import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title style={{ color: "white", margin: 0 }} level={2}>
          AnimeVerse
        </Title>
      </Header>
    </Layout>
  );
};

export default AppHeader;
