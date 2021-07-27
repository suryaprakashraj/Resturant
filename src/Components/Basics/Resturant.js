import React, { useState } from "react";
import "./style.css";
import Menu from "./Menu";
import Nav from "./Nav";
import MenuItem from "./menuApi";
const Resturant = () => {
  const [menuData, setMenuData] = useState(MenuItem);
  const filterItem = (category) => {
    if (category === "all") {
      setMenuData(MenuItem);
      return;
    }
    const updatedMenu = MenuItem.filter((item) => {
      return item.category === category;
    });

    setMenuData(updatedMenu);
  };
  return (
    <>
      <Nav filterItem={filterItem} />
      <Menu menuData={menuData} />
    </>
  );
};
export default Resturant;
