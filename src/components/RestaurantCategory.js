import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, onToggle }) => {

  const { title, itemCards } = data;

  function handleClick() {
    onToggle();
  }

  return (
    <div className="m-auto my-4 w-full bg-gray-50 p-4 shadow-lg">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="text-lg font-bold">
          {title} ({itemCards.length})
        </span>
        <span className="text-xl">{!showItems ? "↓" : "↑"}</span>
      </div>
      {showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
