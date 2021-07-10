import { HomeFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import classes from "./styles.module.css";

const Maker = (hotel) => {
  return (
      <h4 className={classes.h2}>
        <Tooltip color="gold" title={hotel.name}>
          <HomeFilled />
        </Tooltip>
      </h4>
  );
};

const GoogleMap = (props) => {
  const { hotels } = props;

  return (
    <div className={classes.wrapper}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAERs8B21JNmLoTCVHtOKQl8cNslTr_Lwo",
        }}
        defaultCenter={{ lat: 13.7414, lng: 100.553 }}
        defaultZoom={11}
      >
        {hotels.map((hotel) => (
          <Maker hotel={hotel} lat={hotel.latitude} lng={hotel.longitude} key={hotel.code} />
        ))}
      </GoogleMapReact>
      <map />
    </div>
  );
};

GoogleMap.propTypes = {
  hotels: PropTypes.array,
};

GoogleMap.defaultProps = {
  hotels: [],
};

export default GoogleMap;
