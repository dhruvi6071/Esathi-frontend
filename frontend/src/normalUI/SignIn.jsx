import React, { useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate("/dashboard");
  const handleLogin = async (formData) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        ...formData, 
        role: "user"
      });
      const {accessToken, refreshToken, email, role} = response.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("RefreshToken", refreshToken);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userRole", role);

      console.log("Logged in", response.data);
      alert("Login successful!");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert("Invalid credentials. Please try again.");
      console.error("Login Error ", error.response?.data);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please enter both email and password");
      return;
    }
    handleLogin(formData);
    console.log("Sign In", formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };



  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 border border-white/20 shadow-xl rounded-2xl p-8 space-y-4 text-white w-full"
    >
      <h2
        className="text-4xl font-bold text-left mb-2 w-fit
        bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500
        bg-clip-text text-transparent 
        drop-shadow-[0_0_12px_rgba(34,211,238,0.7)] 
        tracking-wide"
      >
        Sign In
      </h2>

      <p className="text-white/60 text-base mb-6">
        Welcome back to <span className="text-cyan-300 font-medium">eSathi</span>
      </p>

      <div>
        <label htmlFor="email" className="block mb-1 text-sm font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-transparent placeholder-white/70 border border-gray-300 mb-2
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-40 
        transition duration-300"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block mb-1 text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-transparent placeholder-white/70 border border-gray-300 mb-2
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-40 
        transition duration-300"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition duration-300"
      >
        Sign In
      </button>

    </form>
  );
}

export default SignIn;
