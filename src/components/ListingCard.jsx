
function ListingCard({ property }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 duration-300">
      <img
        src={property.image}
        alt={property.title}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold">
          {property.title}
        </h2>

        <p className="text-gray-500 mt-2">
          {property.location}
        </p>

        <div className="flex justify-between mt-5">
          <span className="text-emerald-600 font-bold">
            {property.price}
          </span>

          <button className="bg-slate-900 text-white px-5 py-2 rounded-xl">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
