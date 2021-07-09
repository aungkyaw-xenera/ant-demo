import { Layout, Steps, Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import Header from "../../components/Header";
import Carousel1 from "../../assets/images/carousel1.jpg";
import Carousel2 from "../../assets/images/carousel2.jpg";
import Carousel3 from "../../assets/images/carousel3.jpg";
import Carousel4 from "../../assets/images/carousel4.jpg";
import classes from "./styles.module.css";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";
const { Content, Footer } = Layout;
const { Step } = Steps;

// install Swiper modules
SwiperCore.use([Navigation]);
const HomePage = () => {
  return (
    <>
      <Layout className="layout">
        <Header />
        <Content className={classes.container}>
          <Swiper navigation={true}>
            <span className={classes.carousel_caption}>
              <label>Nature Awaits </label>
              <br />
              <label className={classes.title}>Explore The World With Us</label>
            </span>
            <span className={classes.carousel_button}>
              <Button type="primary" className={classes.button} size="large">LEARN MORE</Button>
            </span>
            <SwiperSlide>
              <img alt="Carousel" src={Carousel1} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="Carousel" src={Carousel2} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="Carousel" src={Carousel3} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="Carousel" src={Carousel4} />
            </SwiperSlide>
          </Swiper>
        </Content>
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
    </>
  );
};

export default HomePage;
