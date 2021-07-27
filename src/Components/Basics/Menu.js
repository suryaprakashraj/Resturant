import React from "react";
import './style.css'
const Menu = ({ menuData }) => {
  // console.log(menuData)
  return (
    <>
    <section className="card-container">
      {menuData.map((item, index) => {
        return (
            <>
          <div className="card" key={index}>
            <div className="card-id">{item.id}</div>
            <div className="card-category">{item.category}</div>
            <div className="card-item">{item.name}</div>
            <div className="card-desc">{item.description}</div>
            <img src={item.image} alt="" className="card-img" />
            <button className="card-button">Order Now</button>
          </div>
          </>
        );
      })}
      </section>
    </>
  );
};
export default Menu;
