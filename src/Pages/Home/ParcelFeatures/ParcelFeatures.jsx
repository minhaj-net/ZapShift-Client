import React from 'react';

const ParcelFeatures = () => {
  const features = [
    {
      image: "https://i.ibb.co.com/8Lb1Tkdn/Transit-warehouse.png",
      title: "Live Parcel Tracking",
      description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
    },
    {
      image: "https://i.ibb.co.com/jPr1503m/Vector-1.png",
      title: "100% Safe Delivery",
      description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
    },
    {
      image: "https://i.ibb.co.com/jPr1503m/Vector-1.png",
      title: "24/7 Call Center Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Image Section */}
              <div className="flex-shrink-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full text-white h-full object-cover"
                  />
                </div>
              </div>

              {/* Dotted Divider Line */}
              <div className="hidden sm:block w-px self-stretch mx-2 relative">
                <div className="absolute inset-0 border-l-2 border-dotted border-gray-300"></div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParcelFeatures;