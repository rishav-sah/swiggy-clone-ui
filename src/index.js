import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Help from "./components/Help";
import Search from "./components/Search";
import ErrorPage from "./components/ErrorPage";
import RestaurantGrid from "./components/RestaurantGrid";
import RestaurantMenu from "./components/RestaurantMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestaurantGrid />
      },
      {
        path: "/support",
        element: <Help />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
    ],
    errorElement: <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);