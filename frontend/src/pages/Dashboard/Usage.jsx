import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StateCard } from "@/normalUI/Dashboard/StateCard";
import { Zap, ChartColumnStacked, CloudLightning } from "lucide-react";
import { Shimmer } from "@/normalUI/Dashboard/Shimmer";
import { BillChart } from "@/normalUI/Bills/Chart";
import { PowerUsagePieChart } from "@/normalUI/Bills/PieChart";

const Usage = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    // Simulate mock API response
    const mockData = {
      unitPerPrice: 520,              // ₹ per unit
      avgPowerUsage: 480,             // average units used
      lastMonthUsage: 12,             // kWh for last month
    };

    // Delay added to simulate API call
    setTimeout(() => {
      setResponse(mockData);
    }, 500);
  }, []);

  if (!response) {
    return <Shimmer />;
  }

  return (
    <div className="flex-1 h-full overflow-auto relative z-10 bg-gray-900">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATE CARDS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <StateCard
            name="Per Unit Price"
            icon={Zap}
            value={`₹${response.unitPerPrice}`}
            color="#6366F1"
          />
          <StateCard
            name="Average Usage"
            icon={CloudLightning}
            value={`${response.avgPowerUsage} units`}
            color="#F59EB7"
          />
          <StateCard
            name="Last Month Usage"
            icon={ChartColumnStacked}
            value={`${response.lastMonthUsage} kWh`}
            color="#EC4899"
          />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-4 shadow-md border border-gray-700">
            <h3 className="text-white text-lg font-semibold mb-4">Monthly Bill Chart</h3>
            <BillChart />
          </div>
          <div className="bg-gray-800 rounded-xl p-4 shadow-md border border-gray-700">
            <h3 className="text-white text-lg font-semibold mb-4">Monthly Power Usage</h3>
            <PowerUsagePieChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Usage;
