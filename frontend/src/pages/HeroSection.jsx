import { useState, useEffect } from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "../components/ui/navigation-menu";
import { SparklesCore } from "../components/ui/sparkles";
import { BackgroundGradient } from "../components/ui/background-gradient";
import SignupForm from "../normalUI/SignupForm";
import SignIn from "../normalUI/SignIn";

export default function HeroSection() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    if (showSignUp || showSignIn) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showSignUp, showSignIn]);

  return (
    <div className="relative h-[40rem] w-full bg-gray-800 overflow-hidden flex flex-col items-center justify-center">

      {/* Glow Effects */}
      <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl z-0" />
      <div className="absolute top-1/2 h-48 w-full bg-transparent opacity-10 backdrop-blur-md z-10" />
      <div className="absolute inset-auto h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl z-10" />

      {/* Sparkles Background */}
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 w-full h-full z-0"
        particleColor="#FFFFFF"
      />

      {/* Navbar */}
      <div className="w-full absolute top-0 z-40">
        <NavigationMenu className="relative w-full flex items-center justify-between px-8 py-3 bg-transparent text-white">
          <div className="flex-1">
            <span className="text-xl font-bold font-sans">E-sathi</span>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <NavigationMenuList className="flex gap-6 justify-center">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="transition duration-300 font-semibold text-gray-300 hover:text-white hover:drop-shadow-[0_0_4px_rgba(34,211,238,0.7)]">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="transition duration-300 font-semibold text-gray-300 hover:text-white hover:drop-shadow-[0_0_4px_rgba(34,211,238,0.7)]">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="transition duration-300 font-semibold text-gray-300 hover:text-white hover:drop-shadow-[0_0_4px_rgba(34,211,238,0.7)]">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>

          <div className="flex-1 flex justify-end">
            <HoverBorderGradient onClick={() => setShowSignIn(true)}>
              Sign In
            </HoverBorderGradient>
          </div>
        </NavigationMenu>
      </div>

      {/* Main Heading & Sign Up Button */}
      <div className="flex flex-col items-center">
        <h1
          className="text-center font-sans font-bold mb-12 relative z-10 text-4xl lg:text-6xl md:text-7xl bg-gradient-to-r from-cyan-100 via-blue-200 to-purple-300 bg-clip-text text-transparent transition duration-300 hover:brightness-125 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
        >
          Track your energy usage.
          <div className="mt-3 pb-4">Spot Savings</div>
        </h1>

        <HoverBorderGradient onClick={() => setShowSignUp(true)}>
          Sign Up
        </HoverBorderGradient>
      </div>

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-20 px-4">
          <SparklesCore
            id="signup-sparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={120}
            className="absolute inset-0 w-full h-full z-0"
            particleColor="#FFFFFF"
          />
          <div className="relative w-full max-w-md my-10 z-10">
            <button
              onClick={() => setShowSignUp(false)}
              className="absolute top-2 right-2 text-white bg-transparent rounded-full px-3 py-1 z-20 hover:bg-gray-900 hover:cursor-grabbing"
            >
              ✕
            </button>
            <BackgroundGradient className="rounded-2xl overflow-hidden">
              <div className="max-h-[80vh] overflow-y-auto scrollbar-none" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <SignupForm />
              </div>
            </BackgroundGradient>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-20 px-4">
          <SparklesCore
            id="signin-sparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={120}
            className="absolute inset-0 w-full h-full z-0"
            particleColor="#FFFFFF"
          />
          <div className="relative w-full max-w-md my-10 z-10">
            <button
              onClick={() => setShowSignIn(false)}
              className="absolute top-2 right-2 text-white bg-transparent rounded-full px-3 py-1 z-20 hover:bg-gray-900 hover:cursor-grabbing"
            >
              ✕
            </button>
            <BackgroundGradient className="rounded-2xl overflow-hidden">
              <div className="max-h-[80vh] overflow-y-auto scrollbar-none" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <SignIn />
              </div>
            </BackgroundGradient>
          </div>
        </div>
      )}
    </div>
  );
}
