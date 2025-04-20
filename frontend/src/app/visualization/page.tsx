"use client"
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data for the Hourly Stop Frequency chart (first image)
const hourlyStopData = [
  { hour: '6:00', D: 20, G: 25, V: 0, W: 15 },
  { hour: '7:00', D: 140, G: 200, V: 130, W: 230 },
  { hour: '8:00', D: 120, G: 180, V: 140, W: 230 },
  { hour: '9:00', D: 140, G: 230, V: 140, W: 240 },
  { hour: '10:00', D: 140, G: 235, V: 140, W: 260 },
  { hour: '11:00', D: 140, G: 235, V: 110, W: 260 },
  { hour: '12:00', D: 130, G: 205, V: 130, W: 190 },
  { hour: '13:00', D: 140, G: 215, V: 140, W: 240 },
  { hour: '14:00', D: 140, G: 215, V: 140, W: 240 },
  { hour: '15:00', D: 140, G: 215, V: 140, W: 240 },
  { hour: '16:00', D: 140, G: 215, V: 140, W: 240 },
  { hour: '17:00', D: 140, G: 215, V: 140, W: 240 },
  { hour: '18:00', D: 140, G: 215, V: 50, W: 210 },
  { hour: '19:00', D: 140, G: 100, V: 0, W: 160 },
  { hour: '20:00', D: 80, G: 50, V: 110, W: 150 },
  { hour: '21:00', D: 55, G: 70, V: 110, W: 130 },
  { hour: '22:00', D: 55, G: 70, V: 110, W: 130 },
  { hour: '23:00', D: 30, G: 15, V: 45, W: 35 }
];

// Data for the Total Hourly Stop Coverage chart (second image)
const totalHourlyData = hourlyStopData.map(entry => {
  return {
    hour: entry.hour,
    D: entry.D,
    G: entry.G,
    V: entry.V,
    W: entry.W
  };
});

export default function VisualizationPage() {
  const [activeChart, setActiveChart] = useState('grouped');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Unitrans Route Visualizations</h1>
        
        <div className="mb-8">
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveChart('grouped')}
              className={`px-4 py-2 rounded font-medium ${
                activeChart === 'grouped' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Grouped Bar Chart
            </button>
            <button
              onClick={() => setActiveChart('stacked')}
              className={`px-4 py-2 rounded font-medium ${
                activeChart === 'stacked' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Stacked Bar Chart
            </button>
          </div>
        </div>

        {activeChart === 'grouped' && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Hourly Stop Frequency by Route</h2>
            <div className="h-96 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={hourlyStopData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" label={{ value: 'Hour of Day', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Number of Stops', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="D" fill="#3182CE" name="Route D" />
                  <Bar dataKey="G" fill="#F6AD55" name="Route G" />
                  <Bar dataKey="V" fill="#48BB78" name="Route V" />
                  <Bar dataKey="W" fill="#E53E3E" name="Route W" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 text-gray-700">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="mb-3">
                This visualization compares the hourly stop frequencies for four major Unitrans routes: D, G, V, and W. 
                Each color-coded bar represents the number of scheduled stops made by a specific route during each hour of the day.
              </p>
              <p className="mb-3">
                The grouped layout enables easy comparison of service levels between routes at the same time, 
                helping to identify which routes are most active and during what hours.
              </p>
              <h4 className="font-semibold mt-4 mb-2">Key insights:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Route W consistently has the highest frequency between 7 AM and 6 PM, indicating it's a backbone route with strong coverage.</li>
                <li>Route G also maintains high stop frequency throughout the day, while Route V shows more fluctuation and increased evening activity.</li>
                <li>Route D maintains consistent but slightly lower coverage compared to others, suggesting room for optimization during peak hours.</li>
              </ul>
            </div>
          </div>
        )}

        {activeChart === 'stacked' && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Total Hourly Coverage Stacked by Route</h2>
            <div className="h-96 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={totalHourlyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" label={{ value: 'Hour of Day', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Total Number of Stops', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="D" stackId="a" fill="#3182CE" name="Route D" />
                  <Bar dataKey="G" stackId="a" fill="#F6AD55" name="Route G" />
                  <Bar dataKey="V" stackId="a" fill="#48BB78" name="Route V" />
                  <Bar dataKey="W" stackId="a" fill="#E53E3E" name="Route W" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 text-gray-700">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="mb-3">
                This chart stacks all route frequencies together to show total Unitrans coverage per hour across the four selected routes.
                Each bar's total height represents the combined number of stops scheduled at that hour, while each colored segment reveals 
                how much each route contributes.
              </p>
              <p className="mb-3">
                This view helps answer:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>"What are the peak transit hours overall?"</li>
                <li>"Which routes contribute most during those hours?"</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2">Notable findings:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Peak service occurs between 9 AM and 5 PM</strong>, with total stop counts exceeding 800 per hour.</li>
                <li>Route W makes up the largest proportion of total coverage during those hours.</li>
                <li>Evening hours show a sharp drop, with Route V and W picking up more responsibility after 6 PM.</li>
              </ul>
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Dashboard</h2>
          <p className="text-gray-700 mb-4">
            This visualization dashboard provides insights into the Unitrans bus system's stop frequency patterns 
            throughout the day. By analyzing the distribution of stops across different routes and times, transit 
            planners can optimize schedules, identify service gaps, and better meet rider demands.
          </p>
          <p className="text-gray-700">
            The data shown represents scheduled stops for four major routes (D, G, V, and W) on a typical weekday.
            Toggle between the two chart views to explore different perspectives on the same data.
          </p>
        </div>
      </div>
    </div>
  );
}