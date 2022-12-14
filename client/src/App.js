import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
import ProfilePage from "./pages/ProfilePage";
import BaseballPage from "./pages/BaseballPage";
import './styles/partials/colors.scss'
import './styles/partials/global.scss'

function App() {
  return <div>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/baseball" element={<BaseballPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  </div>;
}

export default App;


