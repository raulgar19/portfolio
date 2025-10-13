import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import MoneyMinderPage from "./pages/projectsPages/moneyMinder/MoneyMinderPage";
import UndeadHuntPage from "./pages/projectsPages/undeadHunt/UndeadHuntPage";
import MyPetsHealthHubPage from "./pages/projectsPages/myPetsHealthHub/MyPetsHealthHubPage";
import EchoPlayPage from "./pages/projectsPages/echoPlay/EchoPlayPage";
import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/money-minder" element={<MoneyMinderPage />} />
        <Route path="/project/undead-hunt" element={<UndeadHuntPage />} />
        <Route
          path="/project/my-pets-health-hub"
          element={<MyPetsHealthHubPage />}
        />
        <Route path="/project/echoplay" element={<EchoPlayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
