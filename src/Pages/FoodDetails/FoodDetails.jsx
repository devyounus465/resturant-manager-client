import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";
import axios from "axios";
import swal from "sweetalert";

const FoodDetails = () => {
  const loaderFoods = useLoaderData();
  //   console.log(loaderFoods);
  const { id } = useParams();
  const [foodItem, setFooditem] = useState([]);
  console.log(foodItem);
  const { _id, name, image, category, quantity, price, origin, madeby } =
    foodItem;
  // product filter

  useEffect(() => {
    const filterFood = loaderFoods.filter((food) => food._id === id);
    setFooditem(filterFood[0]);
  }, [loaderFoods, id]);

  // handale add to cart
  const handleAddToCart = () => {
    // fetch("http://localhost:5000/cart", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(foodItem),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       swal({
    //         title: "Good job!",
    //         text: "product Added to Cart!",
    //         icon: "success",
    //         button: "Close",
    //       });
    //     }
    //   });

    axios
      .post("http://localhost:5000/cart", foodItem)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          swal({
            title: "Good job!",
            text: "product Added to Cart!",
            icon: "success",
            button: "Close",
          });
        }
      })
      .catch((err) => {
        const error = err.message;
        swal({
          title: "error occurd!",
          text: "error found",
          icon: "error",
          button: "Close",
        });
        return;
      });
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-12 mb-12  grid md:grid-cols-5 gap-4 ">
      <div className=" md:col-span-3 ">
        <DetailsCard foodItem={foodItem}></DetailsCard>
      </div>
      <div className=" md:col-span-2  ">
        <div className=" p-6 shadow rounded">
          <div className="flex justify-between mb-4 ">
            <h3 className="text-xl font-semibold">
              {" "}
              Category: <span className="text-[#F63701]">{category}</span>
            </h3>
            <h3 className="text-xl font-semibold">
              Price:
              <span className="text-[#F63701]"> ${price}</span>
            </h3>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between mb-4 ">
            <h3 className="text-lg font-semibold">
              {" "}
              Country: <span className="text-[#F63701]">{origin}</span>
            </h3>
            <h3 className="text-lg font-semibold">
              Made By:
              <span className="text-[#F63701]"> {madeby}</span>
            </h3>
          </div>

          <button
            onClick={handleAddToCart}
            className="block w-full select-none rounded-lg bg-[#F63701] py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
