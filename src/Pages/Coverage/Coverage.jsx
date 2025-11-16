import { Search } from "lucide-react";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const position = [23.685, 90.3563];
const Coverage = () => {
  const serviceCenter = useLoaderData();
  console.log(serviceCenter);
  return (
    <div className="max-w-7xl mx-auto mt-6 px-4">
      <div className="shadow-2xl rounded-3xl bg-white p-8 sm:p-10 lg:p-12">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-9 ">
          We are available in 64 districts
        </h3>

        {/* Search Bar Container */}
        <div className="flex items-center bg-gray-100 rounded-full overflow-hidden shadow-sm max-w-lg">
          {/* Search Icon */}
          <div className="pl-5 pr-3">
            <Search className="w-5 h-5 text-gray-500" />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search here"
            className="flex-1 bg-transparent py-3 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none text-sm sm:text-base"
          />

          {/* Search Button */}
          <button className="bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold px-6 sm:px-8 py-3 rounded-full transition-colors duration-200 m-1">
            Search
          </button>
        </div>
        {/* Leaflet map container  */}
        <div className="mt-6 border w-full h-[600px]">
          <MapContainer
            className="h-[600px]"
            center={position}
            zoom={8}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {serviceCenter.map((center, i) => (
              <Marker key={i} position={[center.latitude, center.longitude]}>
                <Popup>
                  {center.district} <br /> {center.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
