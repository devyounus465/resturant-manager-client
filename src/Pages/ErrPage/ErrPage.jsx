import { Link } from "react-router-dom";

const ErrPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        {/* https://i.ibb.co/v4SNMyD/5203299.jpg
        https://i.ibb.co/0m82wCH/5216331.png */}
        <img src="https://i.ibb.co/0m82wCH/5216331.png " alt="" />
        <Link to={"/"}>
          <button className="btn bg-pink-500 text-white hover:text-pink-500 mt-4">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrPage;
