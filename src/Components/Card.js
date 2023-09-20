import React from "react";
import { CDNlink } from "../Utils/Constants";

export default function Card(props) {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData.info;
  return (
    <>
      <div className="card">
        <img
          src={CDNlink + cloudinaryImageId}
          alt=""
          className="card-img-top cardimage"
        />
        <div className="card-body">
          <h5 className="card-title">
            {name} ⭐{avgRating}
          </h5>
          <p className="card-text">{cuisines.join(", ")}</p>
          <p className="card-text">{areaName}</p>
        </div>
      </div>
    </>
  );
}
