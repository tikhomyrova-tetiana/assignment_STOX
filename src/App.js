import Navbar from "./components/Navbar/Navbar";
import ScrollMenu from "./components/ScrollMenu/ScrollMenu";
import { categories } from "./components/Accordion/categories";
import Accordion from "./components/Accordion/Accordion";
import { useState } from "react";

function App() {
  const [activeId, setActiveId] = useState(null);

  const onClickOpen = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else setActiveId(id);
  };

  return (
    <div className="App">
      <Navbar />
      <ScrollMenu />
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
  );
}

export default App;
