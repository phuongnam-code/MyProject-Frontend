import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

function MovieThumb({ clickable, movieId, image }) {
	return (
		<StyledMovieThumb>{clickable ? <img className="clickable" src={image} alt="mvthumb" /> : <img src={image} alt="mvthumb" />}</StyledMovieThumb>
	);
}

export default MovieThumb;
