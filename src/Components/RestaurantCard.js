import React from "react";

import { ResImage } from "../Utils/Constants";

export default function RestaurantCard(props) {
  const { imageId, name, price } = props;
  console.log(imageId);
  return (
    <>
      <div className="cardData">
        <div className="cardImageclass">
          <img
            src={ResImage + imageId}
            className="img-fluid rounded-start imgclass"
          />
        </div>
        <div className="carddetails">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
