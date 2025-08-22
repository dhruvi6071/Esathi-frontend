import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StateCard } from "@/normalUI/Dashboard/StateCard";
import { Zap, Users,BarChart2, ChartColumnStacked, CalendarCheck2, CloudLightning, Cable } from "lucide-react";
import { OverviewChart } from "@/normalUI/Dashboard/OverviewChart";
import { Shimmer } from "@/normalUI/Dashboard/Shimmer";
import { Billing } from "@/normalUI/Dashboard/Billing";
import { EngineerProfile } from "@/normalUI/Dashboard/EngineerProfile";

const Home = () => {
  const [response, setResponse] = useState(null);
  const [LineChart, setLineChart] = useState([]);

  useEffect(() => {
    // Simulate mock API response
    const mockData = {
      totalCalls: 520,
      avgCallDuration: 480, // in seconds
      totalCampaigns: 12,
      uniqueCallers: 190,
      call_volume: {
        "2025-06-10": 50,
        "2025-06-11": 80,
        "2025-06-12": 90,
        "2025-06-13": 60,
        "2025-06-14": 70,
        "2025-06-15": 40,
      },
    };

    const transformedCallVolume = Object.entries(mockData.call_volume).map(
      ([date, value]) => ({
        date,
        value,
      })
    );

    setTimeout(() => {
      setResponse(mockData);
      setLineChart(transformedCallVolume);
    }, 500);
  }, []);

  if (!response) {
    return <Shimmer />;
  }

  return (
    <div className="flex-1 h-full overflow-auto relative z-10 bg-gray-900">

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 bg-gray-900">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard
            name="Power-Cut Alert"
            icon={Zap}
            value={response.totalCalls}
            color="#6366F1"
          />
          <StateCard
            name="Power-Cut Prediction"
            icon={CloudLightning}
            value={`${Math.round(response.avgCallDuration / 60)} min`}
            color="#F59EB7"
          />
          <StateCard
            name="Power Usage"
            icon={ChartColumnStacked}
            value={response.totalCampaigns}
            color="#EC4899"
          />
          <StateCard
            name="Electricity Supplier"
            icon={Cable}
            value={response.uniqueCallers}
            color="#10B981"
          />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Billing />
          <EngineerProfile />
        </div>
      </main>
    </div>
  );
};

export default Home;
