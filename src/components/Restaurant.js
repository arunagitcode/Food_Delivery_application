import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MENU_URL } from "../utils/Logos";

const Restaurant = () => {
  const [restdata, setRestData] = useState();
  const { restId } = useParams();
  // console.log(restId, "params");

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const data = await fetch(MENU_URL + restId);
    const json = await data.json();
    // console.log(json.data?.cards[0]?.card?.card);
    // console.log(json?.data?.cards)
    // setRestData(json.data?.cards[0].card?.card?.info);/
    setRestData(json?.data?.cards);
  };
  // console.log(restdata);
  // console.log(restdata?.[0]?.card?.card?.info);
  console.log(
    restdata?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards
  );

  // const { name, areaName, avgRating, totalRatingsString, costForTwoMessage } =
  //   restdata?.[0]?.card?.card;
  return (
    <div>
      <div className="btns">
        <h6 className="link">
          <Link to="/">Home |</Link>
        </h6>

        <h6>{restdata?.[0]?.card?.card?.info?.slugs.city} |</h6>
        <h6>{restdata?.[0]?.card?.card?.info?.name}</h6>
      </div>

      <div className="restaurant_details">
        <div>
          <h3>{restdata?.[0]?.card?.card?.info?.name}</h3>
        </div>
        <div className="distance_box"> 

        <div className="distance">
          <h6>{restdata?.[0]?.card?.card?.info?.areaName} </h6>
          <h6>{restdata?.[0]?.card?.card?.info?.feeDetails?.message}</h6>
        </div>
        <div className="rating">
          <h6>{restdata?.[0]?.card?.card?.info?.avgRating}</h6>
          <h6>{restdata?.[0]?.card?.card?.info?.totalRatingsString}</h6>
        </div>
        </div>

      </div>

      <div className="time_distance">
        <h6>{restdata?.[0]?.card?.card?.info?.sla?.slaString}</h6>
        <h6>{restdata?.[0]?.card?.card?.info?.costForTwoMessage}</h6>

      </div>
      <div className="offer_box">
      <h6>
          {
            restdata?.[0]?.card?.card?.info?.aggregatedDiscountInfo
              ?.descriptionList[0]?.meta
          }
        </h6>
        <h6>
          {
            restdata?.[0]?.card?.card?.info?.aggregatedDiscountInfo
              ?.descriptionList[1]?.meta
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
