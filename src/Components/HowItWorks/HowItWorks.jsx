import React from "react";
import { Truck, Banknote, Warehouse, Building2 } from "lucide-react";

const services = [
  {
    title: "Booking Pick & Drop",
    description: "Schedule your pickup and delivery with ease. Our booking pick & drop service ensures your parcels reach their destination safely and on time.",
    icon: <Truck className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Cash On Delivery",
    description: "Accept payments upon delivery with our cash on delivery option. Perfect for e-commerce businesses looking to build customer trust.",
    icon: <Banknote className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Delivery Hub",
    description: "Access our network of delivery hubs for faster shipping. Strategic locations ensure efficient distribution across all regions.",
    icon: <Warehouse className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Booking SME & Corporate",
    description: "Tailored solutions for SME & corporate clients. Volume discounts and dedicated support for your business shipping needs.",
    icon: <Building2 className="w-8 h-8 text-red-500" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">How it Works</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;