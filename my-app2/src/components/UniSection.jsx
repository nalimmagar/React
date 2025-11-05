export default function UniSection({ university }) {
  return (
    <div className="bg-white shadow rounded-2xl overflow-hidden w-full flex flex-col h-[380px] md:h-[400px]">
      
      {/* Image Section */}
      <div className="relative h-1/2 w-full">
        <img
          src={university.cover_image}
          alt={university.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Circle Logo */}
        <div className="absolute top-[120px] left-4 w-14 h-14 rounded-full overflow-hidden border-2 border-white">
          <img
            src={university.logo}
            alt="logo"
            className="w-full h-full object-contain bg-white p-1"
          />
        </div>

        {/* Name, City, Country */}
        <div className="absolute bottom-3 left-[80px] text-white text-left">
          <h2 className="font-bold text-lg">{university.name}</h2>
          <p className="text-sm opacity-90">{university.city}, {university.country?.name}</p>
        </div>
      </div>

      {/* Description & View Details */}
      <div className="h-1/2 p-4 flex flex-col justify-between">
        <p className="text-sm text-gray-700 line-clamp-5 overflow-hidden text-left">
          {university.description
            ? university.description.replace(/<\/?[^>]+(>|$)/g, "")
            : ""}
        </p>
        <a
          href="#"
          className="text-blue-500 text-sm mt-2 font-medium"
        >
          View Details →
        </a>
      </div>
    </div>
  );
}
