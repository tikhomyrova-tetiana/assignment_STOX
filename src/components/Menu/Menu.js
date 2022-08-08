import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
import ScrollMenu from "../ScrollMenu/ScrollMenu";
import { categories } from "../Accordion/categories";
import "./Menu.css";

export default function Menu({ active, setActive }) {
  const [activeId, setActiveId] = useState(null);

  const onClickOpen = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else setActiveId(id);
  };

  return (
    <div className={active ? "menu active" : "menu"}>
      <ScrollMenu />
      <div>
        <ul className="accordion">
          {categories
            ? categories.map((category) => (
                <Accordion
                  id={category.id}
                  name={category.name}
                  subMenu={category.subCategories}
                  onClickOpen={onClickOpen}
                  idToOpen={activeId}
                />
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}
