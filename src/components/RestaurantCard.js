import { IMG_CDN_URL } from "../utils/constants";
import ratingIcon from "../assets/icons/rating-icon.svg";

const RestaurantCard = (props) => {
  return (
    <div className="w-64 min-h-80 max-h-96 rounded overflow-hidden shadow-lg transform transition duration-200 hover:scale-95">
      <figure className="relative">
        <img className="rounded-xl w-full h-48 object-cover" src={`${IMG_CDN_URL}/${props.cloudinaryImageId}`} alt={props.name} />
        <figcaption className="p-3 text-xl text-white font-bold uppercase absolute left-[0] bottom-[-5%]">{props.aggregatedDiscountInfoV3?.header} {props.aggregatedDiscountInfoV3?.subHeader}</figcaption>
      </figure>

      <div className="p-4">
        <h2 className="my-1 truncate text-lg text-[#02060CBF] font-bold leading-6 tracking-tight">{ props.name }</h2>

        <div className="my-1 flex">
          <span className="inline-block w-5 h-5" aria-label="Rating">
            <img src={ratingIcon} alt="" />
          </span>
          <p className="ml-1 text-[#02060cbf] font-bold">{props.avgRating} &middot; {props.sla?.slaString}</p>
        </div>

        <p className="my-1 text-[#02060C99] truncate">
          {props.cuisines.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;