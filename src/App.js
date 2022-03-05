import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SubscribePage from "./pages/SubscribePage";
import "./sass/App.scss";
import TopNav from "./components/Shared/TopNav";
import BottomNav from "./components/Shared/BottomNav";
import { useState, useEffect, createContext } from "react";
export const widthContext = createContext("");

window.$tabletWidth = 800;
window.$mobileWidth = 580;

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function sizeChange() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", sizeChange);
    return () => {
      window.removeEventListener("resize", sizeChange);
    };
  }, []);
  return width;
}
function App() {
  const width = useWindowWidth();
  return (
    <div className="App">
      <widthContext.Provider value={width}>
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Subscribe" element={<SubscribePage />} />
        </Routes>
        <BottomNav />
      </widthContext.Provider>
    </div>
  );
}

export default App;
