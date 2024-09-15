import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NEW_URL } from "../utils/Logos";

const Restaurant = () => {
  const [restdata, setRestData] = useState();
  const { restId } = useParams();

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const data = await fetch(NEW_URL + restId);
    const json = await data.json();

    setRestData(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="mx-52 bg-gray-100 mt-6">
      <div className="flex items-center justify-start">
        <h6>
          <Link to="/">Home |</Link>
        </h6>
      </div>

      <div>
        <div>{/* <h3 className="font-bold mt-7">{restdata?}</h3> */}</div>
        <div className="flex justify-between items-center">
          <div className="distance">
            <h6>{restdata?.[0]?.card?.card?.info?.areaName} </h6>
            <h6>{restdata?.[0]?.card?.card?.info?.feeDetails?.message}</h6>
          </div>
          <div className="border-solid border-2 border-black  text-center mr-4  rounded-lg py-4 ">
            <h6>{restdata?.[0]?.card?.card?.info?.avgRating}</h6>
            <h6>{restdata?.[0]?.card?.card?.info?.totalRatingsString}</h6>
          </div>
        </div>
      </div>

      <div className="flex font-bold gap-4">
        <h6>{restdata?.[0]?.card?.card?.info?.sla?.slaString}</h6>
        <h6>{restdata?.[0]?.card?.card?.info?.costForTwoMessage}</h6>
      </div>
      <div className="flex justify-start items-center gap-3">
        <h6 className="border-solid border-2 border-gray-200 h-20 mt-2">
          {
            restdata?.[0]?.card?.card?.info?.aggregatedDiscountInfo
              ?.descriptionList[0]?.meta
          }
        </h6>
        <h6 className="border-solid border-2 border-gray-200 h-20">
          {
            restdata?.[0]?.card?.card?.info?.aggregatedDiscountInfo
              ?.descriptionList[1]?.meta
          }
        </h6>
        <h6 className="border-solid border-2 border-gray-200 h-20 mt-2">
          {
            restdata?.[0]?.card?.card?.info?.aggregatedDiscountInfo
              ?.descriptionList[0]?.meta
          }
        </h6>
        <h6 className="border-solid border-2 border-gray-200 h-20 mt-2">
          {
            restdata?.[0]?.card?.card?.info?.aggregatedDiscountInfo
              ?.descriptionList[0]?.meta
          }
        </h6>
      </div>

      <div className="restaurant_menu">
        <div className="card_image">
          {/* {restdata?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards} */}
        </div>
      </div>
    </div>
  );
};
export default Restaurant;
