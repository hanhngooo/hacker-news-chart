import { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "./apiUrl"

const useStories = () => {
  const [actualStories, setActualStories] = useState([])
  const [storiesAmount, setStoriesAmount] = useState(10) //N of stories, 10 by default
  const [isLoading, setIsLoading] = useState(false)

  // fetch story IDs
  useEffect(() => {
    const fetchStoryIds = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          `${apiUrl}/topstories.json?print=pretty`
        )
        //Promise.all runs a chain of requests as a chain of promises and returns an array of results
        const storiesResponse = await Promise.all(
          response.data
            .slice(0, storiesAmount)
            .map((id) => axios.get(`${apiUrl}/item/${id}.json?print=pretty`))
        )
        setActualStories(storiesResponse.map((res) => res.data))
        setIsLoading(false)
      } catch (error) {
        throw Error(error)
      }
    }

    //fetch ids every 60s
    const intervalId = setInterval(() => {
      fetchStoryIds()
    }, 60000)

    fetchStoryIds()

    //runs when the component is removed from the UI, cleans the timer (React does not clean setInterval)to spare up resources and prevent memory leaks
    return () => {
      clearInterval(intervalId)
    }
  }, [storiesAmount])

  // change N of stories function
  const changeAmount = (amount) => {
    setStoriesAmount(amount)
  }

  return {
    actualStories,
    changeAmount,
    isLoading,
  }
}

export default useStories
