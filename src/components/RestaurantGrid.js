import RestaurantCard from "./RestaurantCard";
import { SWIGGY_MAIN_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const RestaurantGrid = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setStateVariable(json);
  };

  function setStateVariable(jsonData) {
    if (!jsonData) return;
    jsonData.data.cards.map((item) => {
      if (item.card.card.id == "restaurant_grid_listing") {
        setListOfRestaurants(item?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      };
    });
  };

  return (
    <section>
      <h1 className="text-bold font-bold text-2xl">Restaurants with online food delivery in Hyderabad</h1>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          listOfRestaurants.map((restaurant) => {
            console.log(restaurant)
            return (
              <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
            );
          })
        }
      </div>
    </section>
  );
};


export default RestaurantGrid;