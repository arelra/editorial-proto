import React, { useContext, useEffect, useState } from "react";
import "./Page.css";
import Data from "../ListData.json";
import { Card } from "../card/Card";
import FilterBank from "../filterBank/filterBank";
import { FilterContext } from "../filterContext/filterContext";

const Page = () => {
	const { currentFilter } = useContext(FilterContext);
	const [list, setList] = useState(Data.cards);

	useEffect(() => {
		const filteredCards = Data.cards.filter(
			(card) => card.tag === currentFilter
		);
		setList(filteredCards);
	}, [currentFilter]);

	return (
		<section className="Page-body">
			<div className="Page-container">
				<div className="List-container">
					<FilterBank />
					{list.map((card: any) => (
						<Card image={card.image} tag={card.tag} />
					))}
				</div>
			</div>
		</section>
	);
};
export { Page };
