import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const staticData = [
  { month: "Jan", value: 1200 },
  { month: "Feb", value: 1500 },
  { month: "Mar", value: 1800 },
  { month: "Apr", value: 1100 },
  { month: "May", value: 1900 },
  { month: "Jun", value: 1700 },
];

export const BillChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-gray-700 shadow-[0_0_20px_rgba(96,165,250,0.2)] transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-white mb-4">Monthly Billing Trend</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={staticData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="month"
              stroke="#9CA3AF"
              label={{ value: "Month", position: "insideBottom", offset: -5, fill: "#9CA3AF" }}
            />
            <YAxis
              stroke="#9CA3AF"
              label={{
                value: "Amount (₹)",
                angle: -90,
                position: "insideLeft",
                fill: "#9CA3AF",
                dy: 40,
              }}
            />
            <Tooltip
              formatter={(value) => `₹${value}`}
              labelStyle={{ color: "#E5E7EB" }}
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.85)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              name="Bill Amount"
              stroke="#60A5FA"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
