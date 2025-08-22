import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthRedirector = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    // If not logged in and not already on the signin page, redirect
    if (!token && location.pathname.startsWith("/dashboard")) {
      navigate("/signin");
    }
  }, [location]);

  return null; // no UI, just logic
};

export default AuthRedirector;
