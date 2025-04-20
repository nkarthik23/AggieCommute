"use client"

import { useState } from 'react';

export default function HeatmapPage() {
  const [timeOfDay, setTimeOfDay] = useState('morning');

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Bus Stop Usage Heatmap</h1>
        <p className="text-sm mt-1">
          Visualizing scheduled bus trips by location weight and time of day
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 flex flex-col">
        {/* Controls */}
        <div className="mb-4 flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <div className="text-gray-700">
            <h2 className="font-bold text-lg">Time of Day View</h2>
            <p className="text-sm text-gray-500">
              Toggle between morning and afternoon bus coverage
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className={`font-medium ${timeOfDay === 'morning' ? 'text-blue-600' : 'text-gray-500'}`}>Morning</span>
            <button 
              onClick={() => setTimeOfDay(timeOfDay === 'morning' ? 'afternoon' : 'morning')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle time of day</span>
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  timeOfDay === 'morning' ? 'translate-x-1' : 'translate-x-6'
                }`} 
              />
              <span 
                className={`absolute inset-0 rounded-full ${
                  timeOfDay === 'afternoon' ? 'bg-blue-600' : 'bg-gray-200'
                }`} 
              />
            </button>
            <span className={`font-medium ${timeOfDay === 'afternoon' ? 'text-blue-600' : 'text-gray-500'}`}>Afternoon</span>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 bg-white rounded-lg shadow overflow-hidden">
          {timeOfDay === 'morning' ? (
            <iframe 
              className="w-full h-full border-0" 
              src="weighted_heatmap_morning.html"
              title="Morning Bus Stop Usage Heatmap"
            />
          ) : (
            <iframe 
              className="w-full h-full border-0" 
              src="weighted_heatmap_afternoon.html"
              title="Afternoon Bus Stop Usage Heatmap"
            />
          )}
        </div>

        {/* Legend and Description */}
        <div className="mt-4 bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg text-gray-800 mb-2">About This Visualization</h3>
          <p className="text-gray-700">
            This heatmap visualizes stop usage by weighting each location based on the number of scheduled bus trips. 
            Morning and afternoon breakdowns help identify time-of-day coverage gaps and opportunities to optimize shuttle frequency.
          </p>
          
          <div className="mt-4">
            <h4 className="font-medium text-gray-800">Color Intensity Legend</h4>
            <div className="flex items-center mt-2">
              <div className="flex-1 h-2 bg-gradient-to-r from-blue-50 via-blue-400 to-blue-800 rounded"></div>
              <div className="flex justify-between w-full mt-1 text-xs text-gray-600">
                <span>Low usage</span>
                <span>Medium usage</span>
                <span>High usage</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-3 text-center text-sm">
        <p>Bus Stop Usage Data Visualization — Updated April 2025</p>
      </footer>
    </div>
  );
}