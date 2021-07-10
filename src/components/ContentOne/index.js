import { Badge, Col, Layout, Row } from "antd";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper.min.css";
import classes from "./styles.module.css";

const { Content } = Layout;

const ContentOne = () => {
  return (
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
            but they don’t actually exist. There is only dollars and cents, the
            ...
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
  );
};

export default ContentOne;
