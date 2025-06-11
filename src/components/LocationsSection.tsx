const LocationsSection = () => {
  const locations = [
    {
      name: "Downtown San Diego",
      address: "1234 Main St",
      city: "San Diego, CA 92101",
    },
    {
      name: "Sacramento City",
      address: "5678 Oak Ave",
      city: "Sacramento, CA 95814",
    },
    {
      name: "Chico Heights",
      address: "9012 Pine Rd",
      city: "Chico, CA 95926",
    },
    {
      name: "Santa Clara",
      address: "3456 Elm St",
      city: "Santa Clara, CA 95050",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 space-y-4 sm:space-y-0">
          <h2 className="text-2xl lg:text-[32px] font-graphik font-normal text-[#0f2f64] leading-tight">
            Clinically at San Diego.US
          </h2>
          <button className="text-[#1e5dbc] text-base font-graphik font-bold hover:underline">
            View More Location
          </button>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Placeholder */}
              <div className="w-full h-[200px] bg-[#d7d7d7]" />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-graphik font-medium text-[#0f2f64] leading-tight mb-2">
                  {location.name}
                </h3>
                <div className="text-sm text-[#536288] leading-relaxed">
                  <div>{location.address}</div>
                  <div>{location.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
