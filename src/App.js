import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="App">
      <Navbar onClick={() => setMenuActive(!menuActive)} />
      <Menu active={menuActive} />
    </div>
  );
}

export default App;
