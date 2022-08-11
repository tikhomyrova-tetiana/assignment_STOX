import React from "react";
import "./Accordion.css";

export default function Accordion(props) {
  const { id, idToOpen, name, subMenu, onClickOpen } = props;
  return (
    <li className="accordion-item">
      <div className="accordion-title">
        <font>{name}</font>
        {subMenu ? (
          <button onClick={() => onClickOpen(id)}>
            {idToOpen !== id ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        ) : null}
      </div>

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
  );
}
