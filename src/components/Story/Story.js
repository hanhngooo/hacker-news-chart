import React from "react"
import "./Story.css"

const Story = (props) => {
  const { by, descendants, score, time, title, url } = props.story
  return (
    <div className="story-container">
      <h4 className="story-title">
        <a href={url} target="blank">
          {title}
        </a>
      </h4>
      <div className="story-info">
        <div className="story-author"> by {by}</div>
        <div>{new Date(time * 1000).toLocaleTimeString()}</div>
      </div>
      <div className="story-stats">
        <div className="story-stats-item">
          <div style={{ width: "1.2rem", paddingRight: ".2rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </div>
          <div>{score}</div>
        </div>
        <div className="story-stats-item">
          <div style={{ width: "1.2rem", paddingRight: ".2rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </div>
          <div>{descendants}</div>
        </div>
      </div>
    </div>
  )
}

export default Story
