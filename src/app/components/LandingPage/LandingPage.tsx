"use client";
import BarChart from "../BarChart/BarChart";
import LineChart from "../LineChart/LineChart";

export default function LandingPage() {
  return (
    <div className="h-full w-1/2 p-4" style={{ background: "rgb(30, 30, 40)" }}>
      <h2 className="text-white text-3xl mb-6 ml-12">Your Overview</h2>
      <div className="flex justify-around">
        <div
          className="rounded-2xl p-4 w-full md:w-2/5 min-w-fit h-full text-white"
          style={{ background: "rgb(20, 20, 30)" }}
        >
          <LineChart />
        </div>
        <div
          className="rounded-2xl p-4 w-full md:w-2/5 min-w-fit h-full text-white"
          style={{ background: "rgb(20, 20, 30)" }}
        >
          <BarChart />
        </div>
      </div>
    </div>
  );
}
