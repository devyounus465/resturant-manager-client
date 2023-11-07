import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import FoodCard from "../../Components/FoodCard/FoodCard";

const MyAddedItem = ({ children }) => {
  const { user } = useContext(AuthContext);

  const loadedFood = useLoaderData();

  const [myFoods, setMyFoods] = useState([]);

  // my food filtering
  useEffect(() => {
    const filterFood = loadedFood.filter(
      (food) => food.madebyemail === user?.email
    );
    setMyFoods(filterFood);
  }, [loadedFood, user]);

  return (
    <div className="max-w-[1200px] mx-auto mt-12 mb-12">
      {myFoods.length === 0 ? (
        <div className="h-screen  flex justify-center items-center text-center">
          <div className="space-y-3">
            <h2 className="text-4xl font-semibold">
              You dont have any Food Item yet
            </h2>
            <h4 className="text-xl font-semibold">Go for add a food </h4>
            <Link to={"/additem"}>
              <button className="btn mt-3 bg-[#F63701] text-white hover:text-[#F63701]">
                Add Item
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {myFoods.map((food) => (
            <FoodCard food={food} key={food._id}></FoodCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedItem;
