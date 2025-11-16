import React from 'react';

const MerchantSatisfactionBanner = () => {
  return (
    <div className="w-full bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Banner Card */}
        <div className="relative bg-secondary rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-32 bg-linear-to-b from-white to-transparent"></div>
            <div className="absolute top-10 right-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Content Section */}
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Merchant and Customer Satisfaction
                  <br />
                  is Our First Priority
                </h2>
                
                <p className="text-teal-100 text-sm sm:text-base leading-relaxed max-w-xl">
                  We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="btn btn-primary bg-primary hover:bg-primary text-teal-900 border-none font-semibold rounded-full px-8 normal-case text-base shadow-lg">
                    Become a Merchant
                  </button>
                  <button className="btn btn-outline text-white border-2 border-primary hover:bg-teal-700 hover:border-teal-300 rounded-full px-8 normal-case text-base">
                    Earn with ZapShift Courier
                  </button>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <img 
                    src="https://i.ibb.co.com/LXR2sW1x/Layer-1.png" 
                    alt="Delivery Package Illustration"
                    className="w-full h-auto object-contain opacity-80 drop-shadow-2xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantSatisfactionBanner;