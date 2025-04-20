"use client"

import { useState } from "react";
import Link from "next/link";

export default function AggieCommuteHome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-blue-700 text-white shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white text-blue-700 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 6v6"/>
                  <path d="M15 6v6"/>
                  <path d="M2 12h19.6"/>
                  <path d="M18 18h3"/>
                  <path d="M2 7h18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/>
                </svg>
              </div>
              <Link href="/" className="text-3xl font-bold">AggieCommute</Link>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="font-medium hover:text-blue-200 transition">Home</Link>
              <Link href="/visualization" className="font-medium hover:text-blue-200 transition">Visualization</Link>
              <Link href="/heatmap" className="font-medium hover:text-blue-200 transition">Heatmap</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Main description - Updated to remove big text and enhance description */}
        <div className="bg-white shadow-lg rounded-xl p-8 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 6v6"/>
                <path d="M15 6v6"/>
                <path d="M2 12h19.6"/>
                <path d="M18 18h3"/>
                <path d="M2 7h18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/>
              </svg>
            </div>
            {/* Removed the large AggieCommute text that was here */}
          </div>

          {/* Made the description text bigger with text-2xl instead of text-xl */}
          <p className="text-2xl leading-relaxed mb-6">
            🚍 AggieCommute is a data-driven platform that analyzes Unitrans public transit patterns at UC Davis to
            identify peak congestion hours, gaps in bus service, and opportunities to improve campus mobility.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Visualization panel */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
                <h2 className="text-2xl font-semibold text-blue-700">Visualizations</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Route Frequency by Hour (Bar Chart)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Combined Route Coverage (Stacked Chart)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Interactive Data Analysis Tools</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/visualization" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  View Visualizations
                </Link>
              </div>
            </div>

            {/* Heatmap panel (previously Key Insights) */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <path d="M7 7h.01" />
                  <path d="M11 7h.01" />
                  <path d="M15 7h.01" />
                  <path d="M7 11h.01" />
                  <path d="M11 11h.01" />
                  <path d="M15 11h.01" />
                  <path d="M7 15h.01" />
                  <path d="M11 15h.01" />
                  <path d="M15 15h.01" />
                </svg>
                <h2 className="text-2xl font-semibold text-green-700">Transit Heatmap</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Stop Density Heatmap (Interactive Map)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Campus Congestion Patterns</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>High-demand Parking Areas</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/heatmap" className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                  View Heatmap
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-6 mt-10 flex justify-between items-center">
          <p className="text-sm text-gray-500">Built for HackDavis OpenDataHack 2025</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Made with</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="text-sm text-gray-500">at UC Davis</span>
          </div>
        </div>
      </div>
    </main>
  );
}