import "./App.module.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { ProjectPage } from "./pages/Projects";
import { PageNotFound } from "./pages/PageNotFound";

import { WaterTester } from "./pages/projectPages/watertester";
import { SmartSwitchBoard } from "./pages/projectPages/smartswitchboard";
import { RollingBlinds } from "./pages/projectPages/rollingblinds";
import { SpotifyPlayer } from "./pages/projectPages/spotifyplayer";
import { Ldo } from "./pages/projectPages/ldo";
import { PostureBuddy } from "./pages/projectPages/posturebuddy";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
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
        <Route path="/projects/voltage-regulator" element={<Ldo />}></Route>
        <Route path="/projects/posture-buddy" element={<PostureBuddy />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
