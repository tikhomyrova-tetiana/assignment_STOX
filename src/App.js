import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="App">
      <Navbar onClick={() => setMenuActive(!menuActive)} />
      <main>
        <img
          src="https://images.ctfassets.net/kpep6ikljkgq/1UZ6vYeno1T7T1z3YPfiQO/a6c1424769d819c87a264f9d778c7816/Photoshop_mobiel.jpg?w=1332&h=1666&q=50&fm=webp"
          alt="/"
        />
      </main>
      <Menu active={menuActive} setActive={setMenuActive} />
    </div>
  );
}

export default App;
