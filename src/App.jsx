import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./birthday.css";

import Moment1 from "./components/Moment1";
import Moment2 from "./components/Moment2";
import Moment3 from "./components/Moment3";
import Moment4 from "./components/Moment4";
import Moment5 from "./components/Moment5";
import Particles from "./components/Particles";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <div className="app-container">
      <Particles />
      <Moment1 />
      <Moment2 />
      <Moment3 />
      <Moment4 />
      <Moment5 />
    </div>
  );
}

export default App;
