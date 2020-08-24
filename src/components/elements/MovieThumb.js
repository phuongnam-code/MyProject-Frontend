import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

function MovieThumb({ clickable, movieId, image }) {
	return (
		<StyledMovieThumb>
			{clickable ? (
				<Link to={`/${movieId}`}>
					<img className="clickable" src={image} alt="mvthumb" />
				</Link>
			) : (
				<img src={image} alt="mvthumb" />
			)}
		</StyledMovieThumb>
	);
}
MovieThumb.propTypes = {
	image: PropTypes.string,
	movieId: PropTypes.number,
	clickable: PropTypes.bool,
};
export default MovieThumb;
