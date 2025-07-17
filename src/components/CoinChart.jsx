import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function CoinChart({ coinId }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!coinId) return;

    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`, {
        params: {
          vs_currency: "usd",
          days: 7,
        },
      })
      .then((res) => {
        const prices = res.data.prices;
        setChartData({
          labels: prices.map((p) => new Date(p[0]).toLocaleDateString()),
          datasets: [
            {
              label: "Price in USD",
              data: prices.map((p) => p[1]),
              borderColor: "teal",
              fill: false,
            },
          ],
        });
      })
      .catch((err) => console.error(err));
  }, [coinId]);

  return (
    <div>
      {chartData ? <Line data={chartData} /> : <p>Loading chart...</p>}
    </div>
  );
}

export default CoinChart;
