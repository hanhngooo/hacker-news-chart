import "./App.css"
import Chart from "./components/Chart/Chart"
import Story from "./components/Story/Story"
import useStories from "./services/useStories"

function App() {
  // stories and change N of stories function from useStories Hook
  const { actualStories, changeAmount } = useStories()
  const amountOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

  return (
    <div className="app">
      <header className="app-header container">
        <div className="app-header-wrapper">
          <h2 className="app-header-date">{new Date().toDateString()}</h2>
          <h1 className="app-header-title"> Top Stories</h1>
          <div> Updated every 1 minute</div>
        </div>
      </header>
      <main className="app-main container">
        <div className="app-main-select">
          {/* select button to change N of stories */}
          <div>
            {" "}
            Number of Stories
            <span>
              <select
                defaultValue={10}
                onChange={(e) => changeAmount(e.target.value)}
              >
                {amountOptions.map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>
            </span>
          </div>
        </div>
        <div className="chart-container">
          <Chart stories={actualStories} />
        </div>
        <div className="stories-container">
          {actualStories.map((story, index) => (
            <Story story={story} key={index} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
