import { Layout } from "antd";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import GoogleMap from "../../components/GoogleMap";
import Header from "../../components/Header";
import HotelsList from "../../components/HotelsList";
import SearchForm from "../../components/SearchForm";
import { fetchHotels } from "../../services/hotelService";
import classes from "./styles.module.css";

const { Content, Footer } = Layout;

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

  useEffect(() => {
    getHotels();
  }, []);

  useEffect(() => {
    filterHotels();
  }, [name, categoryNames, boardCodes]);

  return (
    <>
      <Layout className="layout">
        <Header />
        <Content style={{ padding: "0 50px", marginTop: "30px" }}>
          <div className={classes.site_layout_content}>
            <SearchForm
              setName={setName}
              onChangeBoardCode={onChangeBoardCode}
              onChangeCategoryName={onChangeCategoryName}
            />
            <HotelsList hotels={hotels} />
          </div>
          <GoogleMap hotels={hotels} />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default Question2Page;
