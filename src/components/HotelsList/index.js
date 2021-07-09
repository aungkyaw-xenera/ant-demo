import React from "react";
import PropTypes from 'prop-types'
import { List, Space} from "antd";
import { HomeOutlined, StarOutlined } from "@ant-design/icons";
import HotelImage from "../../assets/images/hotel.jpg";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const HotelsList = (props) => {
  const {hotels} = props;
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        // pageSize: 3,
      }}
      dataSource={hotels}
      renderItem={(hotel) => (
        <List.Item
          key={hotel.code}
          actions={[
            <IconText
              icon={StarOutlined}
              text={hotel.categoryName}
              key="list-vertical-star-o"
            />,
          ]}
          extra={<img width={272} alt="logo" src={HotelImage} />}
        >
          <List.Item.Meta
            avatar={<HomeOutlined />}
            title={<a href="/">{hotel.name}</a>}
            description={hotel.code}
          />
          {hotel.rates.join(", ")}
        </List.Item>
      )}
    />
  );
};

HotelsList.propTypes = {
  hotels: PropTypes.array
};

HotelsList.defaultProps = {
  hotels: []
};

export default HotelsList;
