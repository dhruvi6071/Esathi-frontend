import React from 'react';
import { motion } from 'framer-motion';

export const StateCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 p-6 text-white 
                 shadow-[0_0_10px_rgba(59,130,246,0.3)] 
                 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] 
                 transition duration-300 ease-in-out"
      whileHover={{
        y: -5,
        filter: "brightness(1.05)",
      }}
    >
      <div className="flex items-center text-sm font-medium text-gray-400 transition duration-300 group-hover:text-white">
        <Icon
          size={20}
          className="mr-2"
          style={{
            color,
            filter: "drop-shadow(0 0 2px rgba(59,130,246,0.5))",
          }}
        />
        {name}
      </div>
      <p className="mt-2 text-2xl font-semibold text-gray-100 transition duration-300">
        {value}
      </p>
    </motion.div>
  );
};
