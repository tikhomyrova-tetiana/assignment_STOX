import React from "react";
import "./ScrollMenu.css";
import { data } from "./imgData";

export default function ScrollMenu() {
  return (
    <div className="scroll-menu">
      <div className="slider">
        {data.map((item) => (
          <div className="container" key={item.id}>
            <div className="gradient">
              <img className="menu-item" src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
