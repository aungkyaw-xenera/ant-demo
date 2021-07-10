import { Layout } from "antd";
import Carousel from "../../components/Carousel";
import ContentOne from "../../components/ContentOne";
import Header from "../../components/Header";
import SearchBooking from "../../components/SearchBooking";

const { Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout className="layout">
      <Header />
      <Carousel />
      <SearchBooking />
      <ContentOne />
      <Content style={{ padding: "0 50px", marginTop: "30px" }}></Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default HomePage;
