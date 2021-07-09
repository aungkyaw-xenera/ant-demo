import { HomeOutlined } from "@ant-design/icons";
import { Row } from "antd";
import PropTypes from 'prop-types'
import GoogleMapReact from "google-map-react";
import classes from "./styles.module.css";

const GoogleMap = (props) => {
  const { hotels } = props;
  const hotelsOnMap = () => {
    return (
      <>
        {hotels.map((hotel) => (
          <Row
            lat={hotel.latitude}
            lng={hotel.longitude}
            gutter={1}
            key={hotel.code}
          >
            <h2 className={classes.h2} key={hotel.code}>
              <HomeOutlined />
              {/* Hotel List */}
            </h2>
          </Row>
        ))}
      </>
    );
  };

  return (
    <div className={classes.wrapper}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAERs8B21JNmLoTCVHtOKQl8cNslTr_Lwo",
        }}
        defaultCenter={{ lat: 13.7414, lng: 100.553 }}
        defaultZoom={11}
      >
        {hotelsOnMap()}
      </GoogleMapReact>
      <map />
    </div>
  );
};

GoogleMap.propTypes = {
  hotels: PropTypes.array
};

GoogleMap.defaultProps = {
  hotels: []
};

export default GoogleMap;
