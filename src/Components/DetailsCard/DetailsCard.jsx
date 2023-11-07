const DetailsCard = ({ foodItem }) => {
  const { _id, name, image, category, quantity, price, description } = foodItem;
  return (
    <div>
      <div className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img src={image} alt="ui/ux review check" />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {name}
            </h5>
            <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              Quantity:
              <span className="text-[#F63701]">{quantity}</span>
            </p>
          </div>
          <p className="block  text-base antialiased font-normal leading-relaxed text-gray-700">
            {description}
          </p>
          <div className="inline-flex flex-wrap items-center gap-3 mt-8 group"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
