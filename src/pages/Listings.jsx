
import properties from "../data/properties";
import ListingCard from "../components/ListingCard";

function Listings() {
  return (
    <div className="p-10 bg-slate-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-10">
        Featured Properties
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <ListingCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </div>
  );
}

export default Listings;
