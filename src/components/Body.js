import { useEffect, useState } from "react";
import Card from "./Card";

const Body = () => {
  const [initialdata, setInitialData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.716575079626878&lng=83.30742917954922&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setInitialData(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="body_container">
      <div className="search_container">
        <div className="input_field">
          <input type="text" placeholder="search for restaurants and food" />
          <button>search</button>
        </div>
      </div>
      <div className="cards">
        {initialdata.map((item) => (
          <Card key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};
export default Body;
