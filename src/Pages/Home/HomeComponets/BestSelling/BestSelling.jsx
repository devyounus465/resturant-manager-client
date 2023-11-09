import { Link } from "react-router-dom";

const BestSelling = ({ bestFood }) => {
  const { _id, name, image, category, quantity, price, description } = bestFood;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="relative  p-3">
          <div className="bg-[#F63701] px-3 py-1 text-white absolute top-8 left-6 text-base">
            {category}
          </div>
          <img className="h-[300px] object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 50)}...</p>
          <div className="">
            <h3 className="text-2xl text-[#F63701] font-semibold">
              Price:${price}
            </h3>
          </div>
          <div className="card-actions justify-between items-center">
            <h4 className="text-base">Quantity:{quantity}</h4>
            <Link to={`/fooddetails/${_id}`}>
              <button className="btn bg-[#F63701] text-white">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
