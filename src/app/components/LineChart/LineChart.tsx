"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import { Line } from "react-chartjs-2";
import getGradient from "../../Utils/getGradient";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const [bitcoinPrice, setBitcoinPrice] = useState([]);
  const [bitcoinVolume, setBitcoinVolume] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily"
      )
      .then((res) => {
        setBitcoinPrice(res.data.prices);
        setBitcoinVolume(res.data.total_volumes);
      })
      .catch((err) => err);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Bitcoin",
      },
    },
    scales: {
      x: {
        min: 150,
        max: 180,
      },
    },
  };

  const labels = bitcoinPrice.map((date) => {
    const utcTimestamp = date[0];
    const dateObj = new Date(utcTimestamp);

    const formattedDate = format(dateObj, "dd");
    return formattedDate;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Bitcoin Price",
        data: bitcoinPrice.map((price) => price[1]),
        tension: 0.4,
        borderColor: "#00FF5F",
        pointStyle: false,
        fill: true,
        backgroundColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return;
          }
          return getGradient(ctx, chartArea);
        },
      },
    ],
  };

  return (
    <main>
      <div>
        <h1>Bitcoin</h1>
        {<Line options={options} data={data} />}
      </div>
    </main>
  );
}
