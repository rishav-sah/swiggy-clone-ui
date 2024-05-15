import { useEffect, useState } from "react";
import ratingIcon from "../assets/icons/rating-icon.svg";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import MenuSkeleton from "../skeleton/MenuSkeleton";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  function handleAccordionToggle(index) {
    setShowIndex(showIndex === index ? null : index);
  }

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { name, avgRatingString, totalRatingsString, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || "";
  const { itemCards, title } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];

  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  return !resInfo ? (
    <div>
      <MenuSkeleton />
    </div>
  ) : (
    <div className="w-full">
      <div className="m-auto max-w-3xl">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="m-2 flex flex-row items-center">
          <img src={ratingIcon} alt={avgRatingString} />
          <span className="pl-1 font-semibold">
            ({totalRatingsString}) &middot; {costForTwoMessage}
          </span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            {title} ({itemCards?.length})
          </h2>
          {categories.map((category, index) => (
            // controlled component
            <RestaurantCategory
              key={category.card.card.title}
              data={category.card.card}
              showItems={index == showIndex}
              onToggle={() => handleAccordionToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
