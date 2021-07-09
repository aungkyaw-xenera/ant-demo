import { Layout, Menu } from "antd";
import classes from "./styles.module.css";

const { Header:  AntHeader  } = Layout;

const Header = () => {
  return (
    <AntHeader className={classes.header}>
      <div className={classes.logo}>
        EVO
      </div>
      <Menu className={classes.menu} mode="horizontal">
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Tours</Menu.Item>
        <Menu.Item key="3">Desinations</Menu.Item>
        <Menu.Item key="4">Packages</Menu.Item>
        <Menu.Item key="5">Gallery</Menu.Item>
        <Menu.Item key="6">Contact Us</Menu.Item>
      </Menu>
    </AntHeader>
 
  );
};

export default Header;
