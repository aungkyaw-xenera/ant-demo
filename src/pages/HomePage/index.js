import { Layout } from "antd";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import Header from "../../components/Header";
import classes from "./styles.module.css";
import Carousel from "../../components/Carousel";
import {  Col, Row, Badge } from "antd";
import SearchBooking from "../../components/SearchBooking";

const { Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout className="layout">
      <Header />
      <Carousel />
      <SearchBooking />
      <Content className={classes.content}>
        <Row gutter={[56, 16]} className={classes.row}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <div className={classes.badge_wrapper}>
              <Badge.Ribbon text="Travel">
                <span className={classes.title}>01</span>
              </Badge.Ribbon>
            </div>
            <br />
            <span className={classes.content}>
              Sponsorships are like unicorns or leprechauns, talked about often
              but they don’t actually exist. There is only dollars and cents,
              the ...
            </span>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <div className={classes.badge_wrapper}>
              <Badge.Ribbon text="Experience">
                <span className={classes.title}>02</span>
              </Badge.Ribbon>
            </div>
            <br />
            <span className={classes.content}>
              My response is usually harsh. Offended at the suggestion that a
              career that’s taken more than a decade to create could be...
            </span>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <div className={classes.badge_wrapper}>
              <Badge.Ribbon text="Relax">
                <span className={classes.title}>03</span>
              </Badge.Ribbon>
            </div>
            <br />
            <span className={classes.content}>
              My response is usually harsh. Offended at the suggestion that a
              career that’s taken more than a decade to create could be...
            </span>
          </Col>
        </Row>
      </Content>
      <Content style={{ padding: "0 50px", marginTop: "30px" }}></Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default HomePage;
