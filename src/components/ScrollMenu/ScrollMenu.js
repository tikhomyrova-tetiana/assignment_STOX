import React from "react";
import "./ScrollMenu.css";
import { data } from "./imgData";

export default function ScrollMenu() {
  return (
    <div className="scroll-menu">
      <div id="slider" className="slider">
        {data.map((item) => (
          <div className="container" key={item.id}>
            <img className="menu-item" src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
    // <div className="carousel">
    //   <div className="swiper-container">
    //     <div className="swiper-wrapper">
    //       {data.map((item) => (
    //         <div
    //           className={
    //             data[0]
    //               ? "first-item swiper-slide"
    //               : "item swiper-slide swiper-slide-active"
    //           }
    //           key={item.id}
    //         >
    //           <div>
    //             <a href="/nl/" className="item-link">
    //               <h2 className="item-name">{item.name}</h2>
    //               <div className="picture-gradient"></div>
    //               <div className="picture image-wrapper">
    //                 <img className="picture" src={item.img} alt={item.name} />
    //               </div>
    //             </a>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}
