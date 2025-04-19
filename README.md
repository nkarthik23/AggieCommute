# 🚍 AggieCommute: Optimizing Campus Transportation Flow

AggieCommute is a data-driven project that analyzes Unitrans public transit patterns at UC Davis to identify peak congestion hours, gaps in bus service, and opportunities to improve campus mobility. Built for the HackDavis 2025 OpenDataHack, this project uses publicly accessible GTFS data to support sustainable, efficient commuting decisions for students and staff.

---

## 📌 Project Goals

- Visualize and understand Unitrans route coverage over a typical day.
- Identify times of congestion or service drop-off.
- Provide actionable insights to improve shuttle timing and campus transportation planning.

---

## 📊 Datasets Used

- **[Unitrans GTFS Feed](https://unitrans.ucdavis.edu/gtfs)**  
  General Transit Feed Specification (GTFS) zip file containing:
  - `routes.txt`, `trips.txt`, `stop_times.txt`, `stops.txt`, `calendar.txt`

---

## 🧠 Methods

We processed the GTFS dataset using Python (Pandas, Matplotlib) by:
- Merging stop times, trips, and route info
- Filtering by popular routes (D, G, V, W)
- Aggregating hourly stop frequencies
- Generating visualizations of route activity

---

## 📈 Visualizations

- `images/route_v_frequency_cleaned.png`: Stop frequency by hour for Route V
- `images/grouped_route_frequency.png`: Hourly comparison of stop activity for Routes D/G/V/W
- `images/stacked_route_coverage.png`: Stacked total coverage by hour from all routes

---

## 📁 Repository Structure

aggiecommute/ ├── data/ # GTFS raw files (not uploaded due to size) ├── images/ # Output visualizations (.png) ├── notebooks/ │ └── analysis.ipynb # Annotated code used for processing and plotting ├── narrative.pdf # 1-page write-up explaining goals, methods, results └── README.md # This file



---

## ✅ How to Run

1. Download the GTFS zip from [unitrans.ucdavis.edu/gtfs](https://unitrans.ucdavis.edu/gtfs)
2. Extract it into the `data/` folder
3. Run `notebooks/analysis.ipynb` in Jupyter Notebook or VS Code

---

## 🧾 Results & Impact

- Bus routes show high coverage from 7 AM to 5 PM
- Coverage drops sharply in the evening — even when classes and events continue
- Identifying these gaps can help Unitrans/TAPS optimize bus schedules and improve accessibility

---

## 💡 Future Work

- Add campus **stop density heatmaps**
- Integrate TAPS parking congestion data
- Propose specific route/time recommendations for better service alignment

---

## 🔗 License

This project is open-source and free to use for research and civic engagement purposes.

 
