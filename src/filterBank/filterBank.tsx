import React, { FC, useContext } from "react";
import FilterButton from "../filterButton/filterButton";
import { FilterTypes, FilterContext } from "../filterContext/filterContext";

const styles = {
	filterBank: {
		padding: "10px",
		display: "flex",
	},
};

const FilterBank: FC = () => {
	const { setCurrentFilter } = useContext(FilterContext);

	return (
		<div style={styles.filterBank}>
			<FilterButton
				text="Reset"
				onClick={() => setCurrentFilter(FilterTypes.EMPTY)}
			/>
			<FilterButton
				text="Goals"
				onClick={() => setCurrentFilter(FilterTypes.GOALS)}
			/>
			<FilterButton
				text="Cards"
				onClick={() => setCurrentFilter(FilterTypes.CARDS)}
			/>
			<FilterButton
				text="Full Time"
				onClick={() => setCurrentFilter(FilterTypes.FULL_TIME)}
			/>
		</div>
	);
};
export default FilterBank;
