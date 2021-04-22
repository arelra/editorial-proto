import React, { useContext, useEffect, useState } from "react";
import Data from "../ListData.json";
import { Card } from "../card/Card";
import FilterBank from "../filterBank/filterBank";
import { FilterContext } from "../filterContext/filterContext";

const Sport = () => {
  const { currentFilter } = useContext(FilterContext);
  const [list, setList] = useState(Data.cards);
  useEffect(() => {
    const filteredCards = Data.cards.filter(
        (card) => card.tag === currentFilter
    );
    setList(filteredCards);
  }, [currentFilter]);
  return (
    <>
        <FilterBank />
        {list.map((card: any) => (
            <Card image={card.image} tag={card.tag} />
        ))}
    </>
  );
};

export { Sport };
