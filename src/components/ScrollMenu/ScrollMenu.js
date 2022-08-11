import React, { useRef } from "react";
import "./ScrollMenu.css";
import { data } from "./imgData";

export default function ScrollMenu() {
  // const sliderDiv = useRef();
  // const slide = (amount) => {
  //   sliderDiv.current.scrollLeft = sliderDiv.current.scrollLeft + amount;
  // };

  return (
    <div className="scroll-menu">
      {/* <button className="arrow-button" onClick={() => slide(-500)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button> */}
      <div className="carousel">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {data.map((item) => (
              <div className="swiper-slide" key={item.id}>
                <div>
                  <img className="menu-item" src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <button className="arrow-button" onClick={() => slide(500)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button> */}
    </div>
  );
}
