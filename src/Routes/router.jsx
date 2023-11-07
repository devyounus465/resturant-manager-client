import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/HomePage/Home";
import AllFood from "../Pages/AllFood/AllFood";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrPage from "../Pages/errPage/errPage";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import AddFoodItem from "../Pages/AddFoodItem/AddFoodItem";
import MyAddedItem from "../Pages/MyAddedItem/MyAddedItem";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrPage></ErrPage>,
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allfood",
        element: <AllFood></AllFood>,
        loader: () => fetch("http://localhost:5000/foods"),
      },
      {
        path: "/fooddetails/:id",
        element: <FoodDetails></FoodDetails>,
        loader: () => fetch(`http://localhost:5000/foods`),
      },
      {
        path: "/additem",
        element: <AddFoodItem></AddFoodItem>,
      },
      {
        path: "/myitem",
        element: <MyAddedItem></MyAddedItem>,
        loader: () => fetch(`http://localhost:5000/foods`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
