import React from 'react';
import './Card.css';
type Card = {
    image: String,
    tag: String
}
const Card = ({image, tag}: Card) => {
    return  (
        <div className="Card-Body">
          <img className="Card-body"
          width="500"
          src={`../src/assets/cards/${image}`}  />
        </div>
    )

}
export { Card }
