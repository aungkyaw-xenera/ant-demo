import {
  Layout,
  Steps,
  Card,
  Form,
  Input,
  Button,
  Row,
  Col,
  Radio,
} from "antd";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import Header from "../../components/Header";
import classes from "./styles.module.css";
import Carousel from "../../components/Carousel";
import {
  EnvironmentOutlined,
  SendOutlined,
  CalendarFilled,
  SettingOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Content, Footer } = Layout;
const { Step } = Steps;

const HomePage = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState("return");

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <Layout className="layout">
      <Header />
      <Carousel />
      <div className={classes.site_card_border_less_wrapper}>
        <Card bordered={false} className={classes.card}>
          <Form
            form={form}
            name="horizontal_login"
            layout="inline"
            onFinish={onFinish}
          >
            <Row>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value="return" className={classes.radio}>
                  Return
                </Radio>
                <Radio value="one-way" className={classes.radio}>
                  One-Way
                </Radio>
              </Radio.Group>
            </Row>
            <Row gutter={[16, 16]} className={classes.search_form}>
              <Col sx={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item name="from">
                  <Input
                    bordered={true}
                    className={classes.input}
                    size="large"
                    prefix={<EnvironmentOutlined className="site-form-item-icon" />}
                    placeholder="From"
                  />
                </Form.Item>
              </Col>
              <Col sx={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item name="to">
                  <Input
                    bordered={true}
                    className={classes.input}
                    size="large"
                    prefix={<SendOutlined className="site-form-item-icon" />}
                    placeholder="To"
                  />
                </Form.Item>
              </Col>
              <Col sx={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item name="depart">
                  <Input
                    bordered={true}
                    className={classes.input}
                    size="large"
                    prefix={<CalendarFilled className="site-form-item-icon" />}
                    placeholder="Depart"
                  />
                </Form.Item>
              </Col>
              <Col sx={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item name="return">
                  <Input
                    bordered={true}
                    className={classes.input}
                    size="large"
                    prefix={<CalendarFilled className="site-form-item-icon" />}
                    placeholder="Return"
                  />
                </Form.Item>
              </Col>
              <Col sx={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item name="class">
                  <Input
                    bordered={true}
                    className={classes.input}
                    size="large"
                    prefix={<SettingOutlined className="site-form-item-icon" />}
                    placeholder="Class"
                  />
                </Form.Item>
              </Col>
              <Col sx={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                <Form.Item name="traveller">
                  <Input
                    bordered={true}
                    className={classes.input}
                    size="large"
                    prefix={<UsergroupAddOutlined className="site-form-item-icon" />}
                    placeholder="Traveller"
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
                <Form.Item>
                  <Button type="primary" size="large" block>
                    Search Flights
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
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
