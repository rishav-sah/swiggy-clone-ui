import swiggyMainIcon from "../assets/icons/swiggy-main-icon.svg";
import searchIcon from "../assets/icons/search-icon.svg";
import discountIcon from "../assets/icons/discount-icon.svg";
import settingsIcon from "../assets/icons/settings-icon.svg";
import userIcon from "../assets/icons/user-icon.svg";
import shoppingIcon from "../assets/icons/shopping-icon.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  
  // subscribing to the store using the selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  
  const navItems = [
    {
      name: "Search",
      icon: searchIcon,
      path: "search",
    },
    {
      name: "Offers",
      superscript: "NEW",
      icon: discountIcon,
      path: "",
    },
    {
      name: "Help",
      icon: settingsIcon,
      path: "support",
    },
    {
      name: "Sign In",
      icon: userIcon,
      path: "",
    },
    {
      name: `(${cartItems.length})`,
      icon: shoppingIcon,
      path: "/grocery",
    },
  ];


  return (
    <div className="m-auto flex max-w-7xl items-center justify-between p-4">
      <div className="transform transition duration-300 hover:scale-110">
        <Link to="/">
          <img src={swiggyMainIcon} alt="Swiggy" />
        </Link>
      </div>
      <nav>
        <ul className="flex">
          {navItems.map((item) => {
            return (
              <Link key={item.name} to={item.path}>
                <li className="mx-6 flex items-center hover:text-[#fc8019]">
                  <span className="mr-2">
                    <img src={item.icon} alt={item.name} />
                  </span>
                  {item.name}
                  {item.superscript && (
                    <sup className="text-[#fc8019]">{item.superscript}</sup>
                  )}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
