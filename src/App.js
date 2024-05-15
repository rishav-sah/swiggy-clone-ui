import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import RestaurantGrid from "./components/RestaurantGrid";
import { Outlet } from "react-router-dom";
import UserContext from "./context/UserContext";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import 'react-loading-skeleton/dist/skeleton.css';

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Rishav Sah",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

export default App;
