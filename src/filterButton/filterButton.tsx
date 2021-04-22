import React, { FC } from "react";
import { Button } from "@guardian/src-button";
import { SvgArrowRightStraight } from "@guardian/src-icons";

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
		<Button
			size="small"
			iconSide="right"
			icon={<SvgArrowRightStraight />}
			onClick={onClick}
		>
			{text}
		</Button>
	</div>
);

export default FilterButton;
