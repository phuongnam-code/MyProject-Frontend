import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";
import { Link } from "@reach/router";

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

export default MovieThumb;
