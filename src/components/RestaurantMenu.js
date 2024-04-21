import { useEffect, useState } from "react";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
   fetchMenu(); 
  }, [])

  async function fetchMenu() {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=437301&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
    const json = await data.json();
    setResInfo(json.data)

    console.log(json.data.cards[0]?.card.card.text) // restaurant name
    console.log(json.data.cards[2].card.card.info); // restaurant information
    console.log(json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards) // Recommended cuisines
  }

  return (
    <div className="container">
      <div className="max-w-3xl"></div>
      <h1 className="text-2xl">{resInfo?.cards[0]?.card?.card?.text}</h1>
      <h2>Menu</h2>
    </div>
  )
};

export default RestaurantMenu;
