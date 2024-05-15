import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import CardSkeleton from "../skeleton/CardSkeleton";

const RestaurantGrid = () => {
  const onlineStatus = useOnlineStatus();
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
  
  if (!onlineStatus) return <h1>No internet connection...</h1>

  return (
    <section className="m-auto max-w-6xl">
      <h1 className="text-bold my-4 text-2xl font-bold">
        Restaurants with online food delivery in Hyderabad
      </h1>
      <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!listOfRestaurants.length
          ? Array.from({ length: 12 }).map((_, index) => (
              // using index as a key is generally fine when the list is static and items don't change order
              <CardSkeleton key={index} />
            ))
          : listOfRestaurants.map((restaurant) => {
              return (
                <Link
                  key={restaurant.info.id}
                  to={`/restaurant/${restaurant.info.id}`}
                >
                  {false ? (
                    <RestaurantCardPromoted resData={restaurant.info} />
                  ) : (
                    <RestaurantCard resData={restaurant.info} />
                  )}
                  {/* <RestaurantCard {...restaurant.info} /> */}
                </Link>
              );
            })}
      </div>
    </section>
  );
};

export default RestaurantGrid;