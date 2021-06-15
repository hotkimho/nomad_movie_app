import PropTypes from "prop-types"
import React, {useState, useEffect} from "react";
import axios from "axios"
import Movie from "./Movie";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies1, setMovies] = useState([]);


  useEffect(() => {

    async function getMovies(){
      const {data : { data : { movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sory_by=rating");
      setMovies(movies);
      setIsLoading(false);
    }
    getMovies();
  },[])
  return (
    <section className="container">
    <div> {isLoading} ?
    <div className="loader">
      <span className="loader_text">Loading~.~</span>
    </div>
    : <div className="movies">
      {movies1.map(movie =>
      {
      return <Movie key={movie.id} id={movie.id} title={movie.title} summary={movie.summary}
      poster={movie.medium_cover_image} year={movie.year} genres={movie.genres}
      />
      })}
      </div>
      </div>

    </section>
  );
}

export default App;
