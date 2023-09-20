import { useState, useEffect } from "react";
import { ResLink } from "../Utils/Constants";

function useRestaurantData(resId) {
  const [resData, setResData] = useState(null);
  const [resDetails, setResDetails] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch(ResLink + resId);
    const jsonData = await data.json();
    setResData(jsonData);
    setResDetails(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
  };
  return { resData, resDetails };
}

export default useRestaurantData;
