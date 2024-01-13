import { useEffect, useState } from "react";
import Card from "./Card";

const Body = () => {
  const [initialdata, setInitialData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchValue, setSearchValue] = useState("");

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
    setFilteredList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleTopRatedRest = () => {
    const TopRatedRest = initialdata.filter((res) => res?.info.avgRating > 4.5);
    setInitialData(TopRatedRest);
  };

  const handleSearchValue = () => {
    const filteredData = initialdata.filter((res) =>
      res?.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredList(filteredData);
  };
  return (
    <div className="body_container">
      <div className="search_container">
        <div className="input_field">
          <input
            type="text"
            placeholder="search for restaurants and food"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button onClick={handleSearchValue}>search</button>
        </div>
        <button onClick={handleTopRatedRest}>Top Rated Restaurants</button>
      </div>
      <div className="cards">
        {filteredList.map((item) => (
          <Card key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};
export default Body;
