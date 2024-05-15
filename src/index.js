import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Help from "./components/Help";
import Search from "./components/Search";
import ErrorPage from "./components/ErrorPage";
import RestaurantGrid from "./components/RestaurantGrid";
import RestaurantMenu from "./components/RestaurantMenu";

// Lazy Loading
const GroceryApp = lazy(() => import("./components/GroceryApp"));

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
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><GroceryApp /></Suspense>
      }
    ],
    errorElement: <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);