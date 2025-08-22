import { motion } from "framer-motion";
import { StateCard } from "../../normalUI/Dashboard/StateCard";
import { AlertTriangle, Clock, Package, TrendingUp } from "lucide-react";
import { ProductsTable } from "../../normalUI/Bills/Table";
// import { SalesTrendChart } from "../../normalUI/Bills/Chart";
import { useEffect, useState } from "react";
import { Shimmer } from "../../normalUI/Dashboard/Shimmer";
import { Billing } from "@/normalUI/Dashboard/Billing";

const Bills = () => {
  const [tileRes, setTileRes] = useState(null);
  const [lineGraph, setLineGraph] = useState([]);

  useEffect(() => {
    const mockData = {
      tiles: {
        total_calls: 240,
        answered_calls: 180,
        missed_calls: 60,
        avg_call_duration: 320,
      },
      graphs: {
        call_volume: {
          "2025-06-10": 30,
          "2025-06-11": 45,
          "2025-06-12": 40,
          "2025-06-13": 55,
          "2025-06-14": 35,
          "2025-06-15": 50,
        },
        call_outcomes: {
          Answered: 180,
          Missed: 45,
          Failed: 15,
        },
      },
    };

    const transformedCallVolume = Object.entries(
      mockData.graphs.call_volume
    ).map(([date, value]) => ({
      date,
      value,
    }));

    setTimeout(() => {
      setTileRes(mockData.tiles);
      setLineGraph(transformedCallVolume);
    }, 500);
  }, []);

  if (!tileRes || !lineGraph.length) {
    return <Shimmer />;
  }

  return (
    <div className="flex-1 h-full bg-gray-700 overflow-auto relative z-10">
      {/* CONTENT WRAPPER */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
        

        {/* TABLE */}
        <ProductsTable />

        {/* CHART & BILLING */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="order-2 lg:order-1">
            <SalesTrendChart data={lineGraph} />
          </div>
          <div className="order-1 lg:order-2">
            <Billing />
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default Bills;
