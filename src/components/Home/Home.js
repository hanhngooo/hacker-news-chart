import React, { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "../../services/apiUrl"

const Home = () => {
  const [storyIds, setStoryIds] = useState([])
  const [storiesAmount, setStoriesAmount] = useState(10) //N of stories

  //fetch story IDs
  useEffect(() => {
    const fetchStoryIds = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/topstories.json?print=pretty`
        )
        setStoryIds(response.data.slice(0, storiesAmount))
      } catch (error) {
        throw Error(error)
      }
    }
    fetchStoryIds()
  }, [storiesAmount])

  return (
    <div>
      {storyIds.map((id) => (
        <div> {id}</div>
      ))}
      <button onClick={() => setStoriesAmount(10)}>10</button>
      <button onClick={() => setStoriesAmount(15)}>15</button>
      <button onClick={() => setStoriesAmount(20)}>20</button>
    </div>
  )
}

export default Home
