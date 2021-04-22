import React from 'react';
import './Page.css';
import Data from '../ListData.json'
import { Card } from '../card/Card';
import FilterBank from "../filterBank/filterBank";
import FilterContextWrapper from "../filterContext/filterContext";

const Page = () => {
    return  (
        <FilterContextWrapper>
            <section className="Page-body">
                <div className="Page-container">
                    <div className="List-container">
                        <FilterBank />
                        {Data.cards.map(card => 
                            <Card image={card.image} tag={card.tag}/>
                        )}    
                    </div>
                </div>
            </section>
        </FilterContextWrapper>

    )

}
export { Page }
