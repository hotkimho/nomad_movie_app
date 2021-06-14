import PropTypes from "prop-types"



const Movie = ({id, title, summary, poster, year}) =>{
	return <h5>{title}</h5>
}

Movie.prototype = {
	id : PropTypes.number.isRequired,
	title : PropTypes.string.isRequired,
	summary : PropTypes.string.isRequired,
	poster : PropTypes.string.isRequired,
	year : PropTypes.number.isRequired
}

export default Movie;