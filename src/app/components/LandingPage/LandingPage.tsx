"use client";
import LineChart from "../LineChart/LineChart";

export default function LandingPage() {
  return (
    <div className="h-full w-3/4">
      <h2 className="text-white text-3xl mb-6">Overview</h2>
      <LineChart />
    </div>
  );
}
