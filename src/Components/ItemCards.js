import React from "react";
import { ProductImg } from "../Utils/Constants";

export default function ItemCards({ item }) {
  //  console.log(item?.card?.info);
  const descriptionValue = item.card.info.description.split(".")[0];
  return (
    <div>
      <div className="maindiv">
        <div className="productDetails">
          <span className="productDetailsspan">{item.card.info.name}</span>
          <p>
            ₹{" "}
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </p>
          <div className="prductdescription">
            <span>{descriptionValue}</span>
          </div>
          <div className="productimg">
            <img src={ProductImg + item.card.info.imageId} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
