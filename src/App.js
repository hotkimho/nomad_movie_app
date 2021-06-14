import PropTypes from "prop-types"
import React, {useState, useEffect} from "react";
import axios from "axios"
import Movie from "./Movie";


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
    <div className="App">
    <div> {isLoading ? "Loading" : movies1.map(movie =>{
      console.log(movie);
      return <Movie key={movie.id} id={movie.id} title={movie.title} summary={movie.summary}
      poster={movie.medium_cover_image} year={movie.year}
      />
    })}</div>

    </div>
  );
}

export default App;
