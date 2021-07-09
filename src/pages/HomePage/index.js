import { Layout, Steps, Radio } from "antd";
import Header from "../../components/Header";
// import classes from "./styles.module.css";

const { Content, Footer } = Layout;
const { Step } = Steps;

const HomePage = () => {
  return (
    <>
      <Layout className="layout">
        <Header />
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
          <p>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b" disabled>
              Shanghai
            </Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </p>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default HomePage;
