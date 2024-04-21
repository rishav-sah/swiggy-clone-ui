import Header from "./components/Header";
import RestaurantGrid from "./components/RestaurantGrid";
import { Outlet } from "react-router-dom"

const App = () => {
  return (
   <div className="w-full">
    <Header />
    <Outlet />
   </div>
  );
};

export default App;