import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import "./sass/App.scss";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Subscribe" element={<Subscribe />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
