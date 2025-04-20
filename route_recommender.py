def recommend_route(hour: int):
    if 7 <= hour <= 9:
        return {
            "lot": "Lot 47",
            "status": "Likely full",
            "recommendation": "Take Route V or W from West Village between 7:45–9:00 AM."
        }
    elif 9 <= hour <= 10:
        return {
            "lot": "Lot 30",
            "status": "Moderate congestion",
            "recommendation": "Take Route D from East Quad or use a bike route."
        }
    elif 10 <= hour <= 11:
        return {
            "lot": "Lot 1",
            "status": "Likely congested",
            "recommendation": "Take Route G from Shields Library or bike from central campus."
        }
    else:
        return {
            "lot": "Most lots likely available",
            "status": "Low congestion",
            "recommendation": "Check TAPS map or use biking routes."
        }

# Example use:
hour = 8
rec = recommend_route(hour)
print(f"🅿️ Lot: {rec['lot']}")
print(f"📊 Status: {rec['status']}")
print(f"🚍 Recommendation: {rec['recommendation']}")
