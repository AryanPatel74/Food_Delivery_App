import React, { useEffect, useState } from "react";
import { CDNlink } from "../Utils/Constants";
import { useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import useRestaurantData from "../Utils/useRestaurantData";

export default function Restaurant() {
  const { resId } = useParams();
  const { resData, resDetails, resCategory } = useRestaurantData(resId);
  const categories = resCategory.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories[0]?.card?.card?.itemCards[0]?.card?.info);
  return (
    <div className="res">
      <div className="restaurantInfo">
        <img
          src={
            CDNlink +
            resData?.data?.cards[0]?.card?.card?.info.cloudinaryImageId
          }
          alt=""
          className="resImage"
        />
        <p className="resName">
          {resData?.data?.cards[0]?.card?.card?.info.name}
        </p>
        <p className="resCuisines">
          {resData?.data?.cards[0]?.card?.card?.info.cuisines}
        </p>
      </div>
      <hr />
      {categories?.map((resturent) => (
        <RestaurantCard data={resturent?.card?.card} />
      ))}
    </div>
  );
}
