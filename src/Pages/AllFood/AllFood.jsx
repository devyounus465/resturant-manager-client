import { useLoaderData } from "react-router-dom";
import FoodCard from "../../Components/FoodCard/FoodCard";
import Healmet from "../../Components/Healmet/Healmet";
import { useEffect, useState } from "react";

const AllFood = () => {
  const foods = useLoaderData();
  const [filterFood, setFilterFood] = useState([]);

  useEffect(() => {
    setFilterFood(foods);
  }, [foods]);

  // handle onchange serch functionaslity
  const handleFilter = (e) => {
    const filterData = foods.filter((filter) =>
      filter.name.toLowerCase().includes(e.target.value)
    );
    // const value = e.target.value;
    // console.log(value);
    setFilterFood(filterData);
  };

  return (
    <div>
      <Healmet title="Hot gril || AllFood" />

      <div>
        <div
          className="hero min-h-[50vh]"
          style={{
            backgroundImage: "url(https://i.ibb.co/kqSs4bW/home-top-1-1.jpg)",
          }}
        >
          <div className="hero-overlay "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <div className="form-control">
                <div className="input-group">
                  <input
                    type="text"
                    onChange={handleFilter}
                    placeholder="Search…"
                    className="input input-bordered"
                  />
                  <div className="bg-base-200 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-12 mb-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {filterFood.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFood;
