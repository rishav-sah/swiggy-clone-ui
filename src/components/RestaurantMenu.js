import { useEffect, useState } from "react";
import ratingIcon from "../assets/icons/rating-icon.svg";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { name, avgRatingString, totalRatingsString, costForTwoMessage  } = resInfo?.cards[2]?.card?.card?.info || "";
  const {itemCards, title } = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || [];

  return !resInfo ? (
    <h1>Loading...</h1>
  ) : (
    <div className="w-full">
      <div className="m-auto max-w-3xl">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="m-2 flex flex-row items-center">
          <img src={ratingIcon} alt={avgRatingString} />
          <span className="pl-1 font-semibold">({totalRatingsString}) &middot; {costForTwoMessage}</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            {title} ({itemCards?.length})
          </h2>
          {itemCards?.map((item) => {
            const {id, name, defaultPrice, price } = item.card.info
            return (
              <ul key={id}>
                <li className="list-disc">{name} - {(price || defaultPrice)/100}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
