# 🚍 AggieCommute: Optimizing Campus Transportation Flow at UC Davis

AggieCommute is a data-driven project that analyzes UC Davis Unitrans GTFS data and TAPS parking trends to improve campus mobility. Through insightful visualizations, spatial analysis, and a clean interactive UI, AggieCommute identifies service gaps, peak congestion periods, and actionable improvements to reduce carbon emissions and support sustainable commuting.

Built for HackDavis OpenDataHack 2025.

---

## 🌟 Inspiration

AggieCommute was inspired by the challenges UC Davis students face commuting across campus — packed buses, full parking lots, and limited evening service. With both Unitrans GTFS and TAPS parking maps publicly available, we saw an opportunity to use open data to improve everyday transit decisions for our campus community.

---

## 💡 What it Does

- 🕒 Analyzes Unitrans bus activity by hour and route
- 🗺️ Maps geographic stop coverage using a weighted heatmap
- 🚦 Integrates parking lot congestion patterns from the UC Davis TAPS Parking Impact Map
- 📊 Visualizes transit patterns through bar charts and spatial insights
- 🌐 Presents all findings in a responsive web UI built with Next.js

---

## 📁 Folder Structure

/ ├── app/ # All page routes (Landing, Heatmap, Visualizations) ├── public/ │ ├── data/parking_congestion_notes.csv │ └── images/ │ ├── route_v_frequency_cleaned.png │ ├── grouped_route_frequency.png │ ├── stacked_route_coverage.png │ ├── weighted_heatmap_total.html │ └── parking_congestion_map.png ├── components/ │ └── Navbar.tsx ├── notebooks/ │ └── analysis.ipynb # GTFS preprocessing, charts, and heatmap generation ├── narrative.pdf # 1-page project overview (goals, methods, findings) ├── README.md


---

## 📊 Visualizations

- **Grouped Bar Chart:** Route D, G, V, and W frequency by hour
- **Stacked Bar Chart:** Total route coverage per hour stacked by route
- **Weighted Heatmap:** Geographic stop intensity based on number of scheduled trips
- **TAPS Parking Map (Static):** Snapshot of UC Davis congestion zones

---

## 🛠️ How We Built It

- **Data wrangling:** Python + Pandas to clean and join `stop_times.txt`, `routes.txt`, `trips.txt`, and `stops.txt`
- **Charting:** Matplotlib for grouped and stacked route frequency plots
- **Heatmapping:** Folium for spatial stop clustering using weighted trip volume
- **Frontend:** Next.js + Tailwind CSS for a clean, responsive user interface
- **Design:** All pages use animated cards, soft gradients, and structured layout for storytelling

---

## ✅ Accomplishments We're Proud Of

- Used **Folium for the first time** to build and embed interactive heatmaps
- Turned raw GTFS data into real insights and clean visual storytelling
- Designed and deployed a **multi-page app** with landing, charts, and map view
- Extracted parking congestion manually from the **TAPS Parking Impact Map**
- Created a project that's relevant and usable for UC Davis students

---

## 📚 What We Learned

- How GTFS transit data is structured and parsed
- How to visualize time-based + spatial coverage using open data
- How to integrate Python data products into a modern frontend UI
- How to translate mobility data into decisions that impact real people

---

## 🚀 What's Next for AggieCommute

- Add weekday vs. weekend route comparison
- Include real-time bus arrival feeds if accessible
- Work with Unitrans or TAPS to integrate this into official student tools
- Let users filter the heatmap by route or time range

---

## 🔗 Public Data Sources

- [Unitrans GTFS Feed](https://unitrans.ucdavis.edu/gtfs)
- [UC Davis TAPS Parking Impact Map](https://transportation.ucdavis.edu/impact/map)

---

## 📄 License

This project is open-source and available for reuse in civic and educational research. Attribution is appreciated.
