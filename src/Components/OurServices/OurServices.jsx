import React from "react";
import { Truck, MapPin, Package, Home, Building2, RotateCcw } from "lucide-react";

const services = [
  {
    title: "Express & Standard Delivery",
    description: "We deliver parcels within Dhaka in 24-72 hours to Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-8 hours from pick-up to drop-off.",
    icon: <Truck className="w-12 h-12" />,
    bgColor: "bg-white",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500"
  },
  {
    title: "Nationwide Delivery",
    description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
    icon: <MapPin className="w-12 h-12" />,
    bgColor: "bg-primary",
    iconBg: "bg-lime-200",
    iconColor: "text-lime-600",
    featured: true
  },
  {
    title: "Fulfillment Solution",
    description: "We also offer customized service with inventory management support, online order processing, packaging, and after-sales support.",
    icon: <Package className="w-12 h-12" />,
    bgColor: "bg-white",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500"
  },
  {
    title: "Cash on Home Delivery",
    description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <Home className="w-12 h-12" />,
    bgColor: "bg-white",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500"
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description: "Customized corporate services which includes warehouse and inventory management support.",
    icon: <Building2 className="w-12 h-12" />,
    bgColor: "bg-white",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500"
  },
  {
    title: "Parcel Return",
    description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <RotateCcw className="w-12 h-12" />,
    bgColor: "bg-white",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500"
  }
];

const OurServices = () => {
  return (
    <section className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-3xl mx-auto px-4">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to 
            business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center`}
            >
              {/* Icon */}
              <div className={`${service.iconBg} ${service.iconColor} rounded-full p-6 mb-6 flex items-center justify-center`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`text-lg sm:text-xl font-bold mb-4 ${service.featured ? 'text-teal-900' : 'text-gray-800'}`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed ${service.featured ? 'text-teal-800' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;