import { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "../../services/apiUrl"

const useStories = () => {
  const [storyIds, setStoryIds] = useState([])
  const [actualStories, setActualStories] = useState([])
  const [storiesAmount, setStoriesAmount] = useState(10) //N of stories, 10 by default

  //fetch story IDs
  useEffect(() => {
    const fetchStoryIds = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/topstories.json?print=pretty`
        )
        setStoryIds(response.data)
      } catch (error) {
        throw Error(error)
      }
    }

    //fetch ids every 60s
    const intervalId = setInterval(() => {
      fetchStoryIds()
    }, 60000)

    fetchStoryIds()

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  //fetch actual stories with their ids
  useEffect(() => {
    const fetchStories = async () => {
      if (storyIds.length > 0) {
        try {
          //Promise.all handles chain of promises and returns an array of the results of those promises
          const response = await Promise.all(
            storyIds
              .slice(0, storiesAmount)
              .map((id) => axios.get(`${apiUrl}/item/${id}.json?print=pretty`))
          )
          setActualStories(response.map((res) => res.data))
        } catch (error) {
          throw Error(error)
        }
      }
    }
    fetchStories()
  }, [storiesAmount, storyIds])

  // change N of stories function
  const changeAmount = (amount) => {
    setStoriesAmount(amount)
  }
  return { actualStories, changeAmount }
}

export default useStories
