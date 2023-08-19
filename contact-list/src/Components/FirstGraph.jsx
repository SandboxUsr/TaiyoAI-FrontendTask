import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Line } from "react-chartjs-2";
import axios from "axios";

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

export default function FirstGraph() {
  const { data } = useQuery([""], () => {
    return axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((res) => res.data);
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  let labels = Object.keys(data);

  const covidData = {
    labels: labels,
    datasets: [
      {
        labels: "COVID-19 Data",
        data: Object.values(data),
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
  };
  return (
    <>
      <div className="mb-6">COVID-19 Data : </div>
      <Line data={covidData} options={options}></Line>
    </>
  );
}
