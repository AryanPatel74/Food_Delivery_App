import React, { useState } from "react";
import ItemCards from "./ItemCards";
import { ResImage } from "../Utils/Constants";

export default function RestaurantCard({ data }) {
  // const { imageId, name, price } = props;
  //console.log(data?.itemCards[0]?.card?.info);
  const [showCategory, setShowCategory] = useState(false);
  const [dropDownImg, setDropDownImg] = useState("🔽");
  function setValue() {
    if (showCategory) {
      setShowCategory(false);
      setDropDownImg("🔽");
    } else {
      setShowCategory(true);
      setDropDownImg("🔼");
    }
  }
  return (
    <div className="category">
      <div className="categoryItem" onClick={setValue}>
        <span className="itemCards">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="dropdownbutton">{dropDownImg}</span>
      </div>
      {showCategory &&
        data?.itemCards?.map((items) => <ItemCards item={items} />)}
    </div>
  );
}
