import React from "react";
import { StyledLoadMoreBtn } from "../styles/StyledLoadMoreBtn";

function LoeadMoreBtn({ text, callback }) {
	return (
		<StyledLoadMoreBtn type="button" onClick={callback}>
			{text}
		</StyledLoadMoreBtn>
	);
}

export default LoeadMoreBtn;
