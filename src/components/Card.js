import { CARD_URL } from "../utils/Logos";

const Card = (resData) => {

  const {
    cloudinaryImageId,
    avgRating,
    costForTwo,
    cuisines,
    isOpen,
    name,
    totalRatingsString,
    locality,
  } = resData?.resData?.info;
  // console.log(resData?.resData?.info?.cloudinaryImageId);
  return (
    <div className="card_container">
      <div className="card_image_container">
        <img alt="cards_images" src={CARD_URL+resData?.resData?.info?.cloudinaryImageId}></img>
      </div>

      <div className="card_text_container">
        {name}
        {cuisines}
        {avgRating}
        {totalRatingsString}
        {costForTwo}
        {isOpen}
      </div>
    </div>
  );
};
export default Card;
