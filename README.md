## NetflixAI

- Creat React App
- Configure Tailwind and Router
- Creating components and utils folders
- Adding by creating basic component for home page/landing page
- Create Login/Sign up page
- Confihure Firebbase for BE

## Features of building NetflixAI 
- Login/Sign up 
    - Login/Sign up Form
    - if logged in -> redirect to Broweser page

- Browser (after authentication)
    - Header
    - Main Movie
        - Tailer in bg
        - Tile & Descp
        - MovieSugesstions
            - MovieLists * N
- NetflixAI
    - Search Bar
        - Movie Suggestions

<!-- setup for creat react app -->
npx create-react-app netflix-ai

<!-- configuration of Tailwind -->
https://v3.tailwindcss.com/docs/guides/create-react-app

<!-- handled Signin and Signup Form -->

<!-- after that we are going to store user data in Redux Store -->

1. install Redux ToolKit (RTK) 
    - npm install @reduxjs/toolkit
    - npm install react-redux


<!-- Fetched “Now Playing” movies from TMDB API & stored them in Redux. -->

Files Updated / Added:

src/hooks/useNowPlayingMovies.js → Created custom hook to fetch TMDB API data once using useEffect.

src/utils/moviesSlice.js → Added Redux slice to store movie data (addNowPlayingMovies).

src/utils/appStore.js → Integrated movies reducer into store.

src/components/Browse.js (or related component) → Used hook to trigger API call.

💡 Purpose:

Fetch “Now Playing” movies from TMDB API.

Store results in Redux for global access.

Prevent repeated API calls on re-renders.

⚙️ Key Logic:

dispatch(addNowPlayingMovies(data.results)) → Saves fetched movies in Redux.

useEffect(() => { getNowPlayingMovies(); }, []) → Runs API only once.

<!-- Building Browse Page -->



