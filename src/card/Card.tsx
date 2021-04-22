import React, { FC } from "react";
import './Card.css';
type Props = {
    image: String,
    tag: String
}
const Card: FC<Props> = ({image, tag}) => {
    return  (
        <div className="Card-Body">
          <img className="Card-body"
          width="500"
          src={`../src/assets/cards/${image}`}  />
        </div>
    )

}
export { Card }
