import React from "react";
import "./Accordion.css";

export default function Accordion(props) {
  const { id, idToOpen, name, subMenu, onClickOpen } = props;
  return (
    <div>
      <li key={id}>
        <h3 onClick={() => onClickOpen(id)}>{name}</h3>
        {idToOpen === id ? (
          <section>
            {subMenu
              ? subMenu.map((item) => (
                  <div className="sub-menu">
                    <p>{item.name}</p>
                    <p>{item.products} products</p>
                  </div>
                ))
              : null}
          </section>
        ) : null}
      </li>
    </div>
  );
}
