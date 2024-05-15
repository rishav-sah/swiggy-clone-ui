import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../slices/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch()

  function addToCart(item) {
    // dispatch an action
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => {
        const { id, name, defaultPrice, price, ratings, description, imageId } =
          item.card.info;
        return (
          <div
            key={id}
            className="m-2 flex justify-between border-b-2 pb-12 pt-2"
          >
            <div className="w-4/5">
              <span className="block text-lg">{name}</span>
              <span className="block">₹{(price || defaultPrice) / 100}</span>
              {Object.keys(ratings.aggregatedRating).length !== 0 && (
                <span className="block text-xs font-semibold text-red-900">
                  {ratings.aggregatedRating.rating} (
                  {ratings.aggregatedRating.ratingCountV2})
                </span>
              )}
              <p className="mt-4">{description}</p>
            </div>
            <div className="relative h-36 w-1/5">
              <img
                className="h-full w-full rounded-lg"
                src={`${IMG_CDN_URL}${imageId}`}
                alt={name}
              />
              <div className="absolute bottom-[-40] left-6">
                <button
                  className="rounded-md bg-gray-100 px-8 py-1 font-bold text-red-400 shadow-lg hover:bg-gray-300"
                  onClick={() => addToCart(item)}
                >
                  ADD
                </button>
                <span className="ml-2 text-center text-xs text-gray-400">
                  Customisable
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
