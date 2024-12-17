import "./App.module.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { ProjectPage } from "./pages/Projects";

import { WaterTester } from "./pages/projectPages/watertester";
import { SmartSwitchBoard } from "./pages/projectPages/smartswitchboard";
import { RollingBlinds } from "./pages/projectPages/rollingblinds";
import { SpotifyPlayer } from "./pages/projectPages/spotifyplayer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route
          path="/projects/water-quality-tester"
          element={<WaterTester />}
        />
        <Route path="/projects/smart-switch" element={<SmartSwitchBoard />} />
        <Route path="/projects/rolling-blinds" element={<RollingBlinds />} />
        <Route
          path="/projects/spotify-controller"
          element={<SpotifyPlayer />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
