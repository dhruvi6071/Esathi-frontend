import React from "react";
import { motion } from "framer-motion";

export const Shimmer = () => {
  return (
    <div className="flex-1 h-full overflow-auto relative z-10">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity }}
        className="max-w-7xl mx-auto py-6 px-4 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="box bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 h-[7vw]"></div>
          <div className="box bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 h-[7vw]"></div>
          <div className="box bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 h-[7vw]"></div>
          <div className="box bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 h-[7vw]"></div>
        </div>
        <div>
          <div className="box bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 h-[25vw] my-10"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="box bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 h-[20vw]"></div>
          <div className="box bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 h-[20vw]"></div>
          ``
        </div>
      </motion.main>
    </div>
  );
};
