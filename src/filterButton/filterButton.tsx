import React, { FC } from "react";
import { Button } from "@guardian/src-button";

const styles = {
	button: {
		padding: "10px",
	},
};

interface Props {
	text: string;
	onClick: () => void;
}

const FilterButton: FC<Props> = ({ text, onClick }) => (
	<div style={styles.button}>
		<Button size="xsmall" iconSide="left" onClick={onClick}>
			{text}
		</Button>
	</div>
);

export default FilterButton;
