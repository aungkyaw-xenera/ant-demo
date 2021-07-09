import { HomeOutlined, StarOutlined } from "@ant-design/icons";
import GoogleMapReact from "google-map-react";
import {
  Layout,
  List,
  Menu,
  Space,
  Typography,
  Input,
  Row,
  Col,
  Checkbox,
} from "antd";
import React, { useEffect, useState } from "react";
import { fetchHotels } from "../../services/hotelService";
import HotelImage from "../../assets/images/hotel.jpg";
import classes from "./styles.module.css";
import _ from "lodash";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Search } = Input;
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Question2Page = () => {
  const [hotels, setHotels] = useState([]);
  const [name, setName] = useState("");
  const [categoryNames, setCategoryNames] = useState([]);
  const [boardCodes, setBoardCodes] = useState([]);

  const getHotels = async () => {
    const hotelsData = await fetchHotels();
    hotelsData.forEach((hotel) => {
      hotel.rates = _.uniq(
        _.flatMapDeep(
          hotel.rooms.map((room) => room.rates.map((rate) => rate.boardName))
        )
      );
    });
    setHotels(hotelsData);
    console.log(hotelsData);
  };
  const filterHotels = () => {
    let updatedHotels = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(name.toLowerCase())
    );
    if (categoryNames.length > 0) {
      updatedHotels = updatedHotels.filter((hotel) =>
        categoryNames.includes(hotel.categoryName)
      );
    }
    if (boardCodes.length > 0) {
      updatedHotels = updatedHotels.filter((hotel) =>
        boardCodes.some((code) => hotel.rates.includes(code))
      );
    }
    setHotels(updatedHotels);
  };
  const onChangeCategoryName = async (e) => {
    await getHotels();
    if (e.target.checked) {
      setCategoryNames([...categoryNames, e.target.name]);
    } else {
      setCategoryNames(
        categoryNames.filter((categoryName) => categoryName !== e.target.name)
      );
    }
  };
  const onChangeBoardCode = async (e) => {
    await getHotels();
    if (e.target.checked) {
      setBoardCodes([...boardCodes, e.target.name]);
    } else {
      setBoardCodes(
        boardCodes.filter((boardCode) => boardCode !== e.target.name)
      );
    }
  };

  const hotelsOnMap = () => {
    return (
      <>
        {hotels.map((hotel) => (
          <Row lat={hotel.latitude} lng={hotel.longitude} gutter={1} key={hotel.code}>
            <h2 className={classes.h2} key={hotel.code}>
              <HomeOutlined />
              {/* Hotel List */}
            </h2>
          </Row>
        ))}
      </>
    );
  };

  useEffect(() => {
    getHotels();
  }, []);

  useEffect(() => {
    console.log(name, categoryNames, boardCodes);
    filterHotels();
  }, [name, categoryNames, boardCodes]);

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className={classes.logo} />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {new Array(5).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: "30px" }}>
          <div className={classes.site_layout_content}>
            <Title level={3}>Hotel List</Title>
            <Row gutter={[1, 12]}>
              <Col xs={{ span: 15 }} lg={{ span: 8 }}>
                <label>Hotel Name:</label>
                <Search
                  placeholder="Search (Please use enter key to search)"
                  onSearch={(value) => setName(value)}
                  onChange={(e) => setName(e.target.value)}
                  enterButton
                />
              </Col>
              <Col span={9}></Col>
              <Col span={8}>
                <label>Board:</label>
                <Col>
                  <Checkbox
                    name="BED AND BREAKFAST"
                    onChange={(e) => onChangeBoardCode(e)}
                  >
                    BED AND BREAKFAST
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox
                    name="FULL BOARD"
                    onChange={(e) => onChangeBoardCode(e)}
                  >
                    FULL BOARD
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox
                    name="HALF BOARD"
                    onChange={(e) => onChangeBoardCode(e)}
                  >
                    HALF BOARD
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox
                    name="ROOM ONLY"
                    onChange={(e) => onChangeBoardCode(e)}
                  >
                    ROOM ONLY
                  </Checkbox>
                </Col>
              </Col>
              <Col span={9}></Col>
              <Col span={8}>
                <label>Category:</label>
                <Col>
                  <Checkbox
                    name="1 STAR"
                    onChange={(e) => onChangeCategoryName(e)}
                  >
                    1 STAR
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox
                    name="1 STAR AND A HALF"
                    onChange={(e) => onChangeCategoryName(e)}
                  >
                    1 STAR AND A HALF
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox
                    name="2 STARS"
                    onChange={(e) => onChangeCategoryName(e)}
                  >
                    2 STARS
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox
                    name="2 STARS AND A HALF"
                    onChange={(e) => onChangeCategoryName(e)}
                  >
                    2 STARS AND A HALF
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox
                    name="3 STARS"
                    onChange={(e) => onChangeCategoryName(e)}
                  >
                    3 STARS
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox
                    name="3 STARS AND A HALF"
                    onChange={(e) => onChangeCategoryName(e)}
                  >
                    3 STARS AND A HALF
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox
                    name="4 KEYS"
                    onChange={(e) => onChangeCategoryName(e)}
                  >
                    4 KEYS
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox
                    name="4 STARS"
                    onChange={(e) => onChangeCategoryName(e)}
                  >
                    4 STARS
                  </Checkbox>
                </Col>
              </Col>
            </Row>
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 3,
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
          </div>
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAERs8B21JNmLoTCVHtOKQl8cNslTr_Lwo",
              }}
              defaultCenter={{lat: 13.7414,lng: 100.553,}}
              defaultZoom={11}
            >
              {hotelsOnMap()}
            </GoogleMapReact>
            <map />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default Question2Page;
