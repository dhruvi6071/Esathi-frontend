import "./App.css";
import HeroSection from "./pages/HeroSection";
import Home from "./pages/Dashboard/Home";
import DashboardLayout from "./layout/DashboardLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bills from "./pages/Dashboard/Bills";
import Usage from "./pages/Dashboard/Usage";
import PrivateRoute from "./utils/PrivateRoutes";
import AuthRedirector from "./utils/AuthRedirector";

function App() {
  return (
    <Router>
      <AuthRedirector /> {/* Always checks token and redirects if needed */}
      <Routes>
        {/* public route */}
        <Route path="/" element={<HeroSection />} />

        {/* protected routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="bills" element={<Bills />} />
          <Route path="usage" element={<Usage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
