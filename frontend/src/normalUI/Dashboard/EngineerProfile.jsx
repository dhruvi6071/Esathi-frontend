import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const EngineerProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const mockProfile = {
      name: "Raj Niya",
      email: "raj.patel@example.com",
      contact: "+91 98765 43210",
    };

    setTimeout(() => {
      setProfile(mockProfile);
    }, 500);
  }, []);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <motion.div
      className="select-none bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 
      shadow-[0_0_12px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Area Engineer Profile</h2>

      {profile ? (
        <div className="flex flex-col items-center space-y-6">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-semibold shadow-md">
            {getInitials(profile.name)}
          </div>

          {/* Info without boxes */}
          <div className="w-full text-left space-y-4">
            <p className="text-white text-lg font-medium text-center">{profile.name}</p>

              {/* Email Box */}
              <div className="flex-1 bg-gray-800 rounded-xl p-4 px-8 border border-gray-700 
              shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_18px_rgba(59,130,246,0.6)] transition">
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white text-lg font-medium">{profile.email}</p>
              </div>

              {/* Contact Number Box */}
              <div className="flex-1 bg-gray-800 rounded-xl p-4 border border-gray-700 
              shadow-[0_0_8px_rgba(59,130,246,0.3)] hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] transition">
                <p className="text-gray-400 text-sm">Contact Number</p>
                <p className="text-white text-lg font-medium">{profile.contact}</p>
              </div>
            </div>
          </div>
      ) : (
        <p className="text-center text-gray-400">Loading profile...</p>
      )}
    </motion.div>
  );
};
