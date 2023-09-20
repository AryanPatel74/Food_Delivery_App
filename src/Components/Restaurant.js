import React, { useEffect, useState } from "react";
import { CDNlink } from "../Utils/Constants";
import { useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import useRestaurantData from "../Utils/useRestaurantData";

export default function Restaurant() {
  const { resId } = useParams();
  const { resData, resDetails } = useRestaurantData(resId);

  console.log(resDetails);
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
      {resDetails?.map((resturent) => (
        <RestaurantCard
          imageId={resturent?.card?.info.imageId}
          name={resturent?.card?.info.name}
          price={resturent?.card?.info.description}
        />
      ))}
    </div>
  );
}
