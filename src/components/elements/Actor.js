import React from "react";
import NoImage from "../images/no_image.jpg";
import { StyledActor } from "../styles/StyledActor";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import PropTypes from "prop-types";

function Actor({ actor }) {
	return (
		<StyledActor>
			<img src={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage} alt="" />
			<span className="actor-name">{actor.name}</span>
			<span className="actor-character">{actor.charactor}</span>
		</StyledActor>
	);
}
Actor.propTypes = {
	actor: PropTypes.string,
};
export default Actor;
