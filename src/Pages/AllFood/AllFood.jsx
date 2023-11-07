import { useLoaderData } from "react-router-dom";
import FoodCard from "../../Components/FoodCard/FoodCard";

const AllFood = () => {
  const foods = useLoaderData();

  return (
    <div>
      <div className="max-w-[1200px] mx-auto mt-12 mb-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFood;
