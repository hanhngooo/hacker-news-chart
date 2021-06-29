import { useState } from "react"
import "./App.css"
import Chart from "./components/Chart/Chart"
import Story from "./components/Story/Story"
import useStories from "./services/useStories"
function App() {
  // stories function from useStories
  const { actualStories, changeAmount, isLoading } = useStories()
  const [message, setMessage] = useState(false)

  const handleOnchange = (value) => {
    let amountValue = parseInt(value)
    if (amountValue > 50 || amountValue < 2) {
      setMessage(true)
    } else {
      changeAmount(amountValue)
      setMessage(false)
    }
  }

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
          <div>
            {" "}
            Number of Stories
            <span>
              <input
                defaultValue={10}
                type="number"
                placeholder="2-50"
                onChange={(e) => handleOnchange(e.target.value)}
              />
            </span>
            {message && <div> Value should be from 2 to 50 </div>}
          </div>
        </div>
        <div className="chart-container">
          {isLoading && <div>Loading...</div>}
          {!message && <Chart stories={actualStories} />}
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
