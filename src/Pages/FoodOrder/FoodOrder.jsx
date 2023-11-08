import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Healmet from "../../Components/Healmet/Healmet";

const FoodOrder = () => {
  const loaderfoodCart = useLoaderData();

  const [foodCart, setFoodCart] = useState(loaderfoodCart);
  console.log(foodCart);

  // handle cart delete

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/cart/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        console.log("Cart Product deleted successfully");

        swal({
          title: "Good job!",
          text: "Cart Product deleted successfully!",
          icon: "success",
          button: "Close",
        });

        //   cart remaining

        const remainingCart = foodCart.filter((cart) => cart._id !== id);
        setFoodCart(remainingCart);
      }
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-12 mb-12  ">
      <Healmet title="Hot gril || Order"></Healmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Origin</th>
              <th>Made By</th>
              <th>Owner Mail</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {foodCart.map((cart) => (
              <tr key={cart._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cart.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cart.name}</div>
                    </div>
                  </div>
                </td>
                <td>{cart.origin}</td>
                <td>{cart.madeby}</td>
                <td>{cart.madebyemail}</td>
                <td>${cart.price}</td>
                <th>
                  <Link to={`/checkout/${cart._id}`}>
                    <button className="btn bg-blue-500 px-4 mr-2 text-white btn-sm">
                      Confirm
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(cart._id)}
                    className="btn btn-error px-4 btn-sm text-white"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodOrder;
