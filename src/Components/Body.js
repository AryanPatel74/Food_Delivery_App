import React, { useEffect, useState } from "react";
import Card from "./Card";
import resObj from "../Utils/MockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
export default function Body() {
  const [restaurantData, setrestaurantData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [inputvalue, setInputValue] = useState("");

  function findTopRatedFunction() {
    const restaurantTopRated = restaurantData.filter(
      (resturentrating) => resturentrating.info.avgRating >= 4
    );
    setFilterData(restaurantTopRated);
  }

  function searchResturent() {
    const searchedResturent = restaurantData.filter((resturentrating) =>
      resturentrating.info.name
        .toLowerCase()
        .includes(inputvalue.toLocaleLowerCase())
    );
    setFilterData(searchedResturent);
  }
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.50265665712817&lng=77.38183593436493&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await apiData.json();
    // console.log(
    //   jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    // );
    setrestaurantData(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // setRating(
    //   jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    setFilterData(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  console.log(filterData);
  if (restaurantData === null && filterData === null) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="Search">
        <input
          type="text"
          className="searchInput"
          placeholder="Enter the restaurants name"
          value={inputvalue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="searchbutton"
          type="button"
          onClick={searchResturent}
        >
          Search
        </button>
        <button
          className="searchbutton"
          type="button"
          onClick={findTopRatedFunction}
        >
          Top Rated Resturent
        </button>
      </div>
      <div className="cardcomponent">
        {filterData?.map((resturent) => (
          <Link to={"/restaurant/" + resturent.info.id}>
            <Card key={resturent.info.id} resData={resturent} />
          </Link>
        ))}
      </div>
    </>
  );
}
