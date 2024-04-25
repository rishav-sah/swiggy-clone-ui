import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  if (!resId) throw Error("route params missing");

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, [])

  const fetchMenuData = async () => {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${resId}`);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;