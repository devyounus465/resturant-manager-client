import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import swal from "sweetalert";

const AddFoodItem = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  // handle added food item

  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const origin = form.origin.value;
    const description = form.description.value;

    const newFood = {
      name,
      image,
      madeby: user?.displayName,
      madebyemail: user?.email,
      category,
      quantity,
      price,
      origin,
      description,
    };

    //   sent new food item to server

    axios
      .post(
        "https://resturant-manager-server-kxwj1ll2p-younus-alis-projects.vercel.app/foods",
        newFood
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          swal({
            title: "Good job!",
            text: "Food Added Successful !",
            icon: "success",
            button: "Close",
          });
        }
      })
      .catch((err) => {
        const error = err.message;
        swal({
          title: "error occurd!",
          text: error,
          icon: "error",
          button: "Close",
        });
        return;
      });
  };

  return (
    <div>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Add My Food Item
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
              Add your own food item in our website
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="mt-6 overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-gray-900">
                  input food details
                </h3>

                <form
                  onSubmit={handleAddItem}
                  action="#"
                  method="POST"
                  className="mt-14"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Food Name{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="name"
                          id=""
                          placeholder="Enter your food name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Food Image{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="image"
                          id=""
                          placeholder="Enter your food url"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Food Category{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="category"
                          id=""
                          placeholder="Enter your food category"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Food Add By Name{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="addbyname"
                          defaultValue={user?.displayName}
                          id=""
                          readOnly
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Food Add By Email{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="addbyemail"
                          defaultValue={user?.email}
                          id=""
                          readOnly
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Food Price{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="number"
                          name="price"
                          id=""
                          placeholder="Enter your food price"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Food Quantity{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="number"
                          name="quantity"
                          id=""
                          placeholder="Enter your food quantity"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Food Origin{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="origin"
                          id=""
                          placeholder="Enter your Food Origin"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        for=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Food Description{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name="description"
                          id=""
                          placeholder=""
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#F63701] border border-transparent rounded-md focus:outline-none hover:bg-[#ea5026] focus:bg-blue-700"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddFoodItem;
