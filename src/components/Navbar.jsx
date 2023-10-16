import React from "react";

import { Menu } from "antd";
import { HomeOutlined, BulbOutlined, FundOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    {
      key: "Home",
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "Crypto",
      icon: <FundOutlined />,
      label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    },
    {
      key: "News",
      icon: <BulbOutlined />,
      label: <Link to="/news">News</Link>,
    },
  ];
  return (
    <>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["3"]}
        items={menuItems}
      />
    </>
  );
};

export default Navbar;
