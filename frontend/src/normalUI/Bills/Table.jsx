import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ProductsTable = () => {
    const [tableData, setTableData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const rowsPerPage = 6;

    useEffect(() => {
        const monthPairs = [
            "Jan-Feb", "Mar-Apr", "May-Jun", "Jul-Aug",
            "Sep-Oct", "Nov-Dec", "Jan-Feb", "Mar-Apr",
            "May-Jun", "Jul-Aug", "Sep-Oct", "Nov-Dec",

        ]
        // Mock billing data
        const mockBillingData = Array.from({ length: 24 }, (_, index) => ({
            id: index + 1,
            //   user_name: `User_${index + 1}`,
            month_duration: monthPairs[index % monthPairs.length],
            used_units: Math.floor(Math.random() * 300) + 100, // 100–400 units
            bill_amount: Math.floor(Math.random() * 1000) + 500, // ₹500–₹1500
            status: index % 3 === 0 ? "Pending" : "Paid",
            year: 2025 - (index % 3),
        }));

        setTableData(mockBillingData);
        setFilteredData(mockBillingData);
    }, []);

    const handleSearch = (selectedYear) => {
        setSearchTerm(selectedYear);

        if (selectedYear === "") {
            setFilteredData(tableData);
        } else {
            const filtered = tableData.filter((item) =>
                item.year.toString() === selectedYear
            );
            setFilteredData(filtered);
        }

        setCurrentPage(1);
    };


    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentRows = filteredData.slice(startIndex, startIndex + rowsPerPage);

    return (
        <motion.div
             className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 w-full transition duration-300 ease-in-out shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
             initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Billing Table</h2>
                <select
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All Years</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                </select>

            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr className="text-sm text-gray-400 uppercase">
                            <th className="px-6 py-3 text-left">Month</th>
                            <th className="px-6 py-3 text-left">Used Units</th>
                            <th className="px-6 py-3 text-left">Bill Amount (₹)</th>
                            <th className="px-6 py-3 text-left">Status</th>
                            <th className="px-6 py-3 text-left">View</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {currentRows.map((item) => (
                            <tr key={item.id} className="text-sm text-gray-200">
                                <td className="px-6 py-4">{item.month_duration}</td>
                                <td className="px-6 py-4">{item.used_units}</td>
                                <td className="px-6 py-4">₹{item.bill_amount}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === "Paid"
                                            ? "bg-opacity-30 text-green-400"
                                            : "bg-opacity-30 text-red-300"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {item.status === "Pending" ? (
                                        <button className="border border-red-400 text-red-300 px-3 py-1 rounded-md text-sm font-semibold hover:cursor-pointer hover:shadow-[0_0_10px_rgba(248,113,113,0.8)] transition-all duration-300"
                                            onClick={() => alert(`pay now on payment page`)}
                                        >
                                            Pay Now
                                        </button>
                                    ) : (
                                        <button 
                                            className="border border-blue-400 text-blue-300 px-3 py-1 rounded-md text-sm font-semibold hover:cursor-pointer hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300"
                                            onClick={() => alert(`Download PDF for this id`)}
                                        >
                                            Download
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
                    <span>
                        Showing {startIndex + 1} to{" "}
                        {Math.min(startIndex + rowsPerPage, filteredData.length)} of{" "}
                        {filteredData.length} entries
                    </span>
                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-3 py-1 rounded-lg ${currentPage === index + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductsTable;
