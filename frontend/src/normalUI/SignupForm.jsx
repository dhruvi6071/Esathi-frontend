import React, { useState } from "react";
import axiosInstance from "@/lib/axiosInstance";

export default function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        pinCode: "",
    });
    const handleRegister = async (formData) => {
        try {
            const response = await axiosInstance.post("/auth/register", {
                ...formData,
                role: "user",
                stationName:"pithalpur"
            });

            alert("Registration successful!");
            console.log("Registered", response.data);
        } catch (error) {
            if (error.response) {
                // Backend error (400, 500, etc.)
                console.error("Register Error:", error.response.data);
            } else if (error.request) {
                // Request made but no response
                console.error("Register Error: No response from server", error.request);
            } else {
                // Other error (e.g., network issue, code bug)
                console.error("Register Error:", error.message);
            }
        }
    }
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Password do not match");
            return;
        }

        handleRegister(formData);
        console.log("Form Submitted:", formData);
    };

    const handleGoogleSignIn = () => {
        alert("Google Sign-In Clicked");
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
                Create Account
            </h2>

            <p className="text-white/60 text-base mb-6">
                Take control of your energy with <span className="text-cyan-300 font-medium">eSathi</span>
            </p>


            <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium">
                    Full Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-transparent placeholder-white/70 border border-gray-300 mb-2
  focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-40 
  transition duration-300"
                    required
                />
            </div>

            <div>
                <label htmlFor="phone" className="block mb-1 text-sm font-medium">
                    Phone Number
                </label>
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-transparent placeholder-white/70 border border-gray-300 mb-2
  focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-40 
  transition duration-300"
                    required
                />
            </div>

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

            <div>
                <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium">
                    Confirm Password
                </label>
                <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-transparent placeholder-white/70 border border-gray-300 mb-2
  focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-40 
  transition duration-300"
                    required
                />
            </div>

            <div>
                <label htmlFor="pincode" className="block mb-1 text-sm font-medium">
                    Area Pincode
                </label>
                <input
                    id="pincode"
                    type="text"
                    name="pincode"
                    placeholder="Area Pincode"
                    value={formData.pincode}
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
                Sign Up
            </button>

            <div className="text-center text-white/70 mt-2">or</div>

            <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full py-2 flex items-center justify-center gap-2 rounded-xl bg-white text-black hover:bg-gray-200 transition duration-300"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    alt="Google"
                    className="w-5 h-5"
                />
                Sign in with Google
            </button>
        </form>
    );
}