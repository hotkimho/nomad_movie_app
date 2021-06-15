import PropTypes from "prop-types"
import "./Movie.css";


const Movie = ({id, title, summary, poster, year, genres}) =>{
	return <div className="movie">
		<img src={poster} alt={title} title={title}></img>
		<div className="movie_data">
		<h3 className="movie_title">{title}</h3>
		<h5 className="movie_year">{year}</h5>
		<p className="movie_summary">{summary.slice(0,140)}...</p>

		<ul className="genres">{genres && genres.map(gen =>
			<li className="movie_genres">{gen}</li>
		)}</ul>
		</div>
	</div>
}

Movie.prototype = {
	id : PropTypes.number.isRequired,
	title : PropTypes.string.isRequired,
	summary : PropTypes.string.isRequired,
	poster : PropTypes.string.isRequired,
	year : PropTypes.number.isRequired,
	genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;