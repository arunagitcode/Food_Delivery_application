import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
// import { HigherOrderCardComponent } from "./Card";
import { IoMdClose } from "react-icons/io";
import Shimmer from "./Shimmer";
import Carousel from "./Carousel";

const Body = () => {
  const [initialdata, setInitialData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [firstrow, setFirstRow] = useState([])
  // const[heading, setHeading] = useState();

  const [searchValue, setSearchValue] = useState("");

  // const DiscountShow = HigherOrderCardComponent(Card);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setInitialData(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFirstRow(json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleTopRatedRest = () => {
    const TopRatedRest = initialdata.filter((res) => res?.info.avgRating > 4.3);
    setFilteredList(TopRatedRest);
  };

  const handleSearchValue = () => {

    const filteredData = initialdata.filter((res) =>
      res?.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredList(filteredData);


  };

  const handleClear = () => {
    setSearchValue("")
    setFilteredList(initialdata);

  }

  if (filteredList.length === 0) {
    return <Shimmer />
  }

  return (
    <div className="body_container">
      {/* <div className="carousel">
        {firstrow.map((item) => (
          <Link key={item.id}>
            <Carousel data={item} />
          </Link>
        ))}
      </div> */}
      {/* <div> */}
      <div className="search_container">
        <div className="btns">
          <form>
            <input
              type="text"
              placeholder="search for restaurants and food"
              value={searchValue}
              onChange={handleChange}
            />
          
          </form>
          <button type="submit" onClick={handleClear}>clear</button>
          <button
            onClick={handleSearchValue}
          >
            search
          </button>

          <button
            onClick={handleTopRatedRest}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>


      {/* </div> */}


      <div className="cards_container">
        {filteredList.map((item) => (
          <Link to={"/restaurant/" + item.id} key={item.id}>
            <Card resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
