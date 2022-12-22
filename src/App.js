import Articles from "./Components/Articles";
import Choose from "./Components/Choose";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import 'animate.css';
import { useState } from "react";
import MobileMenu from "./Components/MobileMenu";

function App()
{
  const [menu, setMenu] = useState(null);
  const menuShow = () =>
  {
    setMenu(!menu);
  }
  return (
    <div className="App w-full h-full font-Public font-normal relative overflow-hidden">
      <Navbar menuShow={menuShow} menu={menu} />
      <Hero />
      <Choose />
      <Articles />
      <Footer />
      {menu && <MobileMenu />}
    </div>
  );
}

export default App;
