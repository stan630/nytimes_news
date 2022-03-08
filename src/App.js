import React, {useState, useEffect} from "react";
import SearchForm from "./SearchForm";

const App = () => {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
    try {
      const res = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${title}&api-key=${process.env.REACT_APP_MOVIES_API_KEY}`)

        const movies = await res.json()
        setMovies(movies.results)
        console.log(movies.results)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      } 
      
    }

    fetchMovies()
  }, [title])
  
  return (
    <>
      <div className="showcase">
        <div className="overlay px-5">
          <h1 className="text-4xl font-bold capitalize text-gray-300 text-center mb-4 lg:text-6xl">
          Movie Title keyword: {title} </h1>
          <SearchForm searchText={(text) => setTitle(text)}  />
          
        </div>
      </div>
      
      {isLoading ? (
        <h1 className="text-center mt-20 font-bold text-4xl ">Loading...</h1>
       ) : (
        <section className="grid grid-cols-1 gap-10 px-5 pt-10 pb-20">
          {movies.map((movie) => {
            const {display_title, byline, critics_pick, summary_short, opening_date, link:{url}} = movie
            return (
              <movie key={display_title} className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto">
                <h2 className="font-bold text-2xl mb-2 lg:text-4xl">{display_title}</h2>
                <p><span className="font-bold"> Review by:</span> {byline}</p>
                <p><span className="font-bold">Critic's Pick?</span> {critics_pick}</p>
                <p><span className="font-bold">Summary:</span> {summary_short}</p>
                <p><span className="font-bold">Opening:</span> {opening_date}</p>
                <a href={url} target="_blank" className="underline">Read the New York Times Review of {display_title}</a>
              </movie>
            )
          })}
        </section>
      )}
      </>
  );
}

export default App;
