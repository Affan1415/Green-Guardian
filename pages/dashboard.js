// @/pages/dashboard.js
import { useState, useEffect } from "react";
import { database, ref, onValue, set } from "@/utils/firebase";

const Dashboard = () => {
    const [sensorData, setSensorData] = useState(null);

    useEffect(() => {
        const sensorRef = ref(database, '/'); // Root path of your Firebase data
        console.log("Realtime Data:");
        const unsubscribe = onValue(sensorRef, (snapshot) => {
            const data = snapshot.val();
            console.log("Realtime Data:", data);
            setSensorData(data);
        });

        // Cleanup listener on unmount
        return () => unsubscribe();
    }, []);

    // Function to toggle device state (bulb, fan, etc.)
    const toggleDevice = async (key, value) => {
        try {
            const deviceRef = ref(database, `/${key}`);
            await set(deviceRef, value);
            console.log(`${key} updated to ${value}`);
        } catch (error) {
            console.error("Error updating device state:", error);
        }
    };

    if (!sensorData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard bg-gray-100 min-h-screen p-6">
            <h1 className="text-2xl font-bold mb-6">GreenGuardian Dashboard</h1>

            <div className="mb-6">
                <button
                    className={`px-4 py-2 font-semibold text-white rounded ${sensorData.Mode === "0" ? "bg-blue-500" : "bg-green-500"
                        }`}
                    onClick={() =>
                        toggleDevice("Mode", sensorData.Mode === "0" ? "1" : "0")
                    }
                >
                    {sensorData.Mode === "0" ? "Switch to AI Mode" : "Switch to Manual Mode"}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Light Control */}
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="font-bold">Light: {sensorData.V4}</h2>
                    <button
                        className={`mt-2 px-4 py-2 rounded ${sensorData.B2 === "0" ? "bg-gray-300" : "bg-yellow-500 text-white"
                            }`}
                        onClick={() => toggleDevice("B2", sensorData.B2 === "0" ? "1" : "0")}
                    >
                        {sensorData.B2 === "0" ? "Turn On Bulb" : "Turn Off Bulb"}
                    </button>
                </div>

                {/* Temperature Control */}
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="font-bold">Temperature: {sensorData.V1}°C</h2>
                    <button
                        className={`mt-2 px-4 py-2 rounded ${sensorData.B4 === "0" ? "bg-gray-300" : "bg-blue-500 text-white"
                            }`}
                        onClick={() => toggleDevice("B4", sensorData.B4 === "0" ? "1" : "0")}
                    >
                        {sensorData.B4 === "0" ? "Turn On Fan" : "Turn Off Fan"}
                    </button>
                </div>

                {/* Humidity Control */}
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="font-bold">Humidity: {sensorData.V2}%</h2>
                    <button
                        className={`mt-2 px-4 py-2 rounded ${sensorData.B5 === "0" ? "bg-gray-300" : "bg-green-500 text-white"
                            }`}
                        onClick={() => toggleDevice("B5", sensorData.B5 === "0" ? "1" : "0")}
                    >
                        {sensorData.B5 === "0" ? "Open Lid" : "Close Lid"}
                    </button>
                </div>

                {/* Soil Moisture Control */}
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="font-bold">Soil Moisture: {sensorData.V3}%</h2>
                    <button
                        className={`mt-2 px-4 py-2 rounded ${sensorData.B3 === "0" ? "bg-gray-300" : "bg-teal-500 text-white"
                            }`}
                        onClick={() => toggleDevice("B3", sensorData.B3 === "0" ? "1" : "0")}
                    >
                        {sensorData.B3 === "0" ? "Start Pump" : "Stop Pump"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
