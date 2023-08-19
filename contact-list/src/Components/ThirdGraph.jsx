import React from 'react';
import { Line } from 'react-chartjs-2';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function ThirdGraph() {
  const { data: historicalData, isLoading, isError } = useQuery("third", () => {
    return axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => res.data);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const chartData = {
    labels: Object.keys(historicalData.cases),
    datasets: [
      {
        label: 'Total Cases',
        data: Object.values(historicalData.cases),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Total Deaths',
        data: Object.values(historicalData.deaths),
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'Total Recovered',
        data: Object.values(historicalData.recovered),
        fill: false,
        borderColor: 'rgb(0, 128, 0)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>COVID-19 Historical Data</h2>
      <Line data={chartData} />
    </div>
  );
}
