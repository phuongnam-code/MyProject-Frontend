import React from "react";
import { StyledLoadMoreBtn } from "../styles/StyledLoadMoreBtn";
import PropTypes from "prop-types";

function LoeadMoreBtn({ text, callback }) {
	return (
		<StyledLoadMoreBtn type="button" onClick={callback}>
			{text}
		</StyledLoadMoreBtn>
	);
}
LoeadMoreBtn.propTypes = {
	text: PropTypes.string,
	callback: PropTypes.func,
};
export default LoeadMoreBtn;
