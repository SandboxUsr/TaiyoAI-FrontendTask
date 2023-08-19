import React from 'react';
import { Line } from 'react-chartjs-2';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function SecondGraph() {
  const { data: countryWiseData, isLoading, isError } = useQuery([""], () => {
    return axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.data)
      .then((data) => {
        const countryData = data.map((country) => ({
          date: country.updated,
          cases: country.cases,
        }));
        return countryData; // Return the processed data
      });
  })

  console.log(countryWiseData);

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  // Convert the object into an array
  const countryDataArray = Object.values(countryWiseData);

  // Define chart data
  const chartData = {
    labels: countryDataArray.map((country) => country.date),
    datasets: [
      {
        label: 'Total Cases',
        data: countryDataArray.map((country) => country.cases),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>COVID-19 Total Cases Over Time</h2>
      <Line data={chartData} />
    </div>
  );
}
