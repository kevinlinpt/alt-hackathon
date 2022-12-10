import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ForumPage from "./pages/ForumPage";
import ProfilePage from "./pages/ProfilePage";
import './styles/partials/colors.scss'
import './styles/partials/global.scss'

function App() {
  return <div>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  </div>;
}

export default App;
