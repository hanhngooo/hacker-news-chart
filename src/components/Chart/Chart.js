import React from "react"
import useStories from "./useStories"
import { Scatter } from "react-chartjs-2"

const Chart = () => {
  const { actualStories } = useStories()
  const storiesData = actualStories
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
        backgroundColor: "#a05195",
      },
    ],
  }
  const options = {
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
  console.log(storiesData)
  return (
    <div className="chart-container">
      <Scatter data={data} height={70} options={options} />
    </div>
  )
}

export default Chart
