import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import SearchForm from "./SearchForm";
// import NoResults from "./NoResults";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  //   const [NoResults, setNoResults] = useState(false);
  let noresults = "";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${title}&api-key=${process.env.REACT_APP_MOVIES_API_KEY}`
        );

        const movies = await res.json();
        if (movies.results !== null) {
          setMovies(movies.results);
          console.log(movies.results);
          setIsLoading(false);
        } else {
          alert("No matches found!");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [title]);

  return (
    <>
      <div className="showcase">
        <div className="overlay px-5">
          <h1 className="text-4xl font-bold capitalize text-gray-300 text-center mb-4 lg:text-6xl">
            Movie Title <span className="lowercase">or </span>keyword: {title}{" "}
          </h1>
          <SearchForm searchText={(text) => setTitle(text)} />
        </div>
      </div>

      {isLoading ? (
        <h1 className="text-center mt-20 font-bold text-4xl ">Loading...</h1>
      ) : (
        movies && <MovieList movies={movies} />
      )}
    </>
  );
};

export default App;
