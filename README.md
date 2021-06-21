# Hacker-news Data Chart

A react application that communicates with a [HackerNews API](https://github.com/HackerNews/API) and visualize metrics in a clear way.

## Used Techs

- React with hooks(create-react-app)
- HTML
- CSS
- Chartjs (react-chartjs-2)

## App features

- Application should fetch first N stories from hacker-news api using the following route: https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
- N is 10 by default, max 50, user can change N by selecting button.
- Fetch details of each story accordingly
- Display a line (scatter) chart to visualize descendants and score
- Display a list of stories

## How to Install this?

- Clone the app
- cd into your project
- Install dependencies using `npm install`
- Start development server using `npm run start`
