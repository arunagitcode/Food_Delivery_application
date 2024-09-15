import { CARD_URL } from "../utils/Logos";

const Card = (resData) => {
  console.log("resdata",resData)
  
  const {
    cloudinaryImageId,
    avgRating,
    costForTwo,
    cuisines,
    isOpen,
    name,
    totalRatingsString,
    locality,
    aggregatedDiscountInfoV3,
  } = resData?.resData?.info;
  // console.log("check", resData?.resData?.info?.aggregatedDiscountInfoV3);
  return (
    <div className="cards">
      <div className="card_im">
        <img
          alt="cards_images"
          src={CARD_URL + resData?.resData?.info?.cloudinaryImageId}></img>
      </div>

      <div className="card_text_container">
        <h4 className="font-bold">{name}</h4>
        <h5>
          {avgRating} {totalRatingsString} {costForTwo}
        </h5>
        <h5> {cuisines.join(",")}</h5>
      </div>
    </div>
  );
};

export default Card;

// export const HigherOrderCardComponent = (Card) => {
//   return () => {
//     return (
//       <div>
//         <h1>Res-Opened</h1>
//         <Card />
//       </div>
//     );
//   };
// };
