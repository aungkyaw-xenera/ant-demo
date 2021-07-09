import { Button } from "antd";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Carousel1 from "../../assets/images/carousel1.jpg";
import Carousel2 from "../../assets/images/carousel2.jpg";
import Carousel3 from "../../assets/images/carousel3.jpg";
import Carousel4 from "../../assets/images/carousel4.jpg";
import classes from "./styles.module.css";

SwiperCore.use([Autoplay, Navigation]);

const Carousel = () => {
  return (
    <div className={classes.container}>
      <Swiper
        navigation={true}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <span className={classes.carousel_caption}>
          <label>Nature Awaits </label>
          <br />
          <label className={classes.title}>Explore The World With Us</label>
        </span>
        <span className={classes.carousel_button}>
          <Button type="primary" className={classes.button} size="large">
            LEARN MORE
          </Button>
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
    </div>
  );
};

export default Carousel;
