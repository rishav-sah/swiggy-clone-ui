import { IMG_CDN_URL } from "../utils/constants";
import ratingIcon from "../assets/icons/rating-icon.svg";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext)
  const {name, cloudinaryImageId, aggregatedDiscountInfoV3, sla, avgRating, cuisines  } = props.resData;
  return (
    <div className="w-64 min-h-80 max-h-96 rounded overflow-hidden shadow-lg transform transition duration-200 hover:scale-95">
      <figure className="relative">
        <img className="rounded-xl w-full h-48 object-cover" src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt={name} />
        <figcaption className="p-3 text-xl text-white font-bold uppercase absolute left-[0] bottom-[-5%]">{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</figcaption>
      </figure>

      <div className="p-4">
        <h2 className="my-1 truncate text-lg text-[#02060CBF] font-bold leading-6 tracking-tight">{name}</h2>

        <div className="my-1 flex">
          <span className="inline-block w-5 h-5" aria-label="Rating">
            <img src={ratingIcon} alt="" />
          </span>
          <p className="ml-1 text-[#02060cbf] font-bold">{avgRating} &middot; {sla?.slaString}</p>
        </div>

        <p className="my-1 text-[#02060C99] truncate">
          {cuisines.join(", ")}
        </p>
        <p className="text-xs text-[#02060C99]">
          User: {loggedInUser}
        </p>
      </div>
    </div>
  );
};

// Higher Order Component - takes RestaurantCard as an input and returns RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return function(props) {
    return (
      <div>
        <span>Promoted</span>
        <RestaurantCard {...props} />
      </div>
    )
  }
};

export default RestaurantCard;