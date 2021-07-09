import { Layout, Menu } from "antd";
import classes from "./styles.module.css";

const { Header:  AntHeader  } = Layout;

const Header = () => {
  return (
    <AntHeader>
      <div className={classes.logo} />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        {new Array(5).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </AntHeader>
  );
};

export default Header;
