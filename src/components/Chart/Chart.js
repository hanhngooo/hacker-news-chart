import React from "react"
import { Scatter } from "react-chartjs-2"
import "./Chart.css"

const Chart = ({ stories }) => {
  //data to pass in chart, mapping to new array with x,y properties, in ascending order of descendants
  const storiesData = stories
    .map((story) => {
      return { x: story.descendants, y: story.score }
    })
    .sort((a, b) => a.x - b.x)

  const data = {
    datasets: [
      {
        label: "Dataset",
        data: storiesData,
        showLine: true,
        fill: false,
        borderColor: "#d45087",
        backgroundColor: "#f5adad",
      },
    ],
  }
  // options sets axis labels
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          display: true,
          color: "#008bff",
        },
        title: {
          display: true,
          text: "Score",
          aline: "center",
          color: "#d45087",
        },
      },
      x: {
        ticks: {
          display: true,
          color: "#008bff",
        },
        title: {
          display: true,
          text: "Descendants",
          aline: "center",
          color: "#d45087",
        },
      },
    },
  }
  return <Scatter data={data} height={600} options={options} />
}

export default Chart
