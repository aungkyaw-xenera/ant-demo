import { Layout, Steps } from "antd";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import Header from "../../components/Header";
// import classes from "./styles.module.css";
import Carousel from "../../components/Carousel";

const { Content, Footer } = Layout;
const { Step } = Steps;

const HomePage = () => {
  return (
    <Layout className="layout">
      <Header />
      <Carousel />
      <Content style={{ padding: "0 50px", marginTop: "30px" }}>
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step
            title="In Progress"
            subTitle="Left 00:00:08"
            description="This is a description."
          />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default HomePage;
