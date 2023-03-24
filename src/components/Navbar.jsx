import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="larger" style={{marginRight:"15px"}}/>
        <Typography.Title level={2} className="Logo">
          <Link to="/">CryptoArena</Link>
        </Typography.Title>
        {/* <button className='menu-control-container'>
            </button> */}
      </div>
            <Menu theme="dark">
                <Menu.Item icon = {<HomeOutlined/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon = {<FundOutlined/>}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon = {<MoneyCollectOutlined/>}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon = {<HomeOutlined/>}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
    </div>
  );
};

export default Navbar;
