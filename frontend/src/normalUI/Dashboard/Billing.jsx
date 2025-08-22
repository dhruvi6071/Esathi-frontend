import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Billing = () => {
  const [lastBillInfo, setLastBillInfo] = useState(null);

  useEffect(() => {
    const mockBillingData = {
      month: "June 2025",
      amount: 740,
      status: false,
      usage: 328,
    };

    setTimeout(() => {
      setLastBillInfo(mockBillingData);
    }, 500);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="select-none bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 
      shadow-[0_0_10px_rgba(59,130,246,0.4)] hover:shadow-[0_0_13px_rgba(59,130,246,0.7)] transition w-full"
    >
      <h2 className="text-lg font-medium mb-6 text-gray-100">Last Bill Info</h2>

      {lastBillInfo ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Billing Month */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 flex flex-col justify-center px-6 py-8 min-h-[140px] w-full
          shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_18px_rgba(59,130,246,0.6)] transition">
            <p className="text-gray-400 text-sm mb-1">Billing Month</p>
            <p className="text-white text-xl font-semibold">{lastBillInfo.month}</p>
          </div>

          {/* Total Amount */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 flex flex-col justify-center px-6 py-8 min-h-[140px] w-full
          shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_18px_rgba(59,130,246,0.6)] transition">
            <p className="text-gray-400 text-sm mb-1">Total Amount</p>
            <p className="text-white text-xl font-semibold">₹{lastBillInfo.amount}</p>
          </div>

          {/* Usage */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 flex flex-col justify-center px-6 py-8 min-h-[140px] w-full
          shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_18px_rgba(59,130,246,0.6)] transition">
            <p className="text-gray-400 text-sm mb-1">Last Month Usage</p>
            <p className="text-white text-xl font-semibold">{lastBillInfo.usage} units</p>
          </div>

          {/* Status Button Box */}
          <div
            className={`rounded-xl px-6 py-8 min-h-[140px] w-full flex justify-center items-center transition text-xl font-semibold
            ${
              lastBillInfo.status
                ? "border border-green-500 text-green-400 hover:shadow-[0_0_18px_rgba(34,197,94,0.7)]"
                : "border border-red-500 text-red-400 hover:shadow-[0_0_18px_rgba(239,68,68,0.7)] hover:cursor-pointer"
            }`}
          >
            {lastBillInfo.status ? (
              <span className="w-full h-full flex justify-center items-center">Paid</span>
            ) : (
              <button className="w-full h-full flex justify-center items-center hover:cursor-pointer">
                Pay Now
              </button>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-400">Loading bill details...</p>
      )}
    </motion.div>
  );
};
