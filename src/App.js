import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SubscribePage from "./pages/SubscribePage";
import "./sass/App.scss";
import TopNav from "./components/Shared/TopNav";
import BottomNav from "./components/Shared/BottomNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Subscribe" element={<SubscribePage />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
