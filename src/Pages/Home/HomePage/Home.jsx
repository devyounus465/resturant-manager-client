import { Link, useLoaderData } from "react-router-dom";
import Healmet from "../../../Components/Healmet/Healmet";
import Slider from "../HomeComponets/Slider/Slider";
import BestSelling from "../HomeComponets/BestSelling/BestSelling";
import { useEffect, useState } from "react";

const Home = () => {
  const originalData = useLoaderData();
  const [bestselling, setBestSelling] = useState([]);

  useEffect(() => {
    if (originalData.length > 0) {
      const sortdata = [...originalData].sort(
        (a, b) => b.quantity - a.quantity
      );
      const topSix = sortdata.slice(0, 6);
      setBestSelling(topSix);
    }
  }, [originalData]);

  console.log(originalData);
  return (
    <div>
      <Healmet title="Hot gril || Home"></Healmet>
      <Slider></Slider>
      <div className="max-w-[1200px] mx-auto mt-12 mb-12">
        <div className="mt-12 mb-6">
          <h2 className="text-5xl font-bold text-center ">Best Selling Food</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {bestselling.map((bestFood) => (
            <BestSelling key={bestFood._id} bestFood={bestFood}></BestSelling>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to={"/allfood"}>
            <button className=" btn bg-[#F63701] text-white border border-[#F63701] hover:text-[#F63701] hover:border-[#F63701] mt-4">
              Show All Food
            </button>
          </Link>
        </div>

        <div className="my-[70px] mb-8">
          <div className="mt-6 mb-6 text-center space-y-3">
            <h2 className="text-5xl font-bold  ">How It Work</h2>
            <p className="text-base text-gray-300">
              Cum doctus civibus efficiantur in imperdiet deterruisset.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            <div className="text-center">
              <figure className="flex justify-center">
                <img src="https://i.ibb.co/VMfjDBb/Screenshot-159.png" alt="" />
              </figure>
              <h3 className="text-2xl font-semibold">Choose a restaurant</h3>
              <p className="text-base text-gray-300">
                Cras vitae dictum velit. Duis at purus enim. Cras massa massa,
                maximus sit amet finibus quis, pharetra eu erat.
              </p>
            </div>
            <div className="text-center">
              <figure className="flex justify-center">
                <img src="https://i.ibb.co/TLRXV4T/Screenshot-160.png" alt="" />
              </figure>
              <h3 className="text-2xl font-semibold">Choose a tasty dish</h3>
              <p className="text-base text-gray-300">
                Cras vitae dictum velit. Duis at purus enim. Cras massa massa,
                maximus sit amet finibus quis, pharetra eu erat.
              </p>
            </div>
            <div className="text-center">
              <figure className="flex justify-center">
                <img src="https://i.ibb.co/Vp8r6rH/Screenshot-161.png" alt="" />
              </figure>
              <h3 className="text-2xl font-semibold">Pick up or delivery</h3>
              <p className="text-base text-gray-300">
                Cras vitae dictum velit. Duis at purus enim. Cras massa massa,
                maximus sit amet finibus quis, pharetra eu erat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
