import React, { useState, FC } from "react";

export enum FilterTypes {
	EMPTY = 0,
	GOALS = 1,
	CARDS = 2,
	FULL_TIME = 3,
}

interface Props {
	children: React.ReactNode;
}

export const FilterContext = React.createContext<any>({});

const FilterContextWrapper: FC<Props> = ({ children }) => {
	const [currentFilter, setCurrentFilter] = useState(FilterTypes.EMPTY);

	return (
		<FilterContext.Provider value={{ currentFilter, setCurrentFilter }}>
			{children}
		</FilterContext.Provider>
	);
};

export default FilterContextWrapper;
