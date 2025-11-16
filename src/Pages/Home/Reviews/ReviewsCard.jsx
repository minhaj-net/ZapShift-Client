import React from 'react';

const ReviewsCard = ({review}) => {
  const {userName,review:tastimonial,user_photoURL:photoUrl}=review
  return (
    <div className="w-full bg-gray-100 py-5 px-2 mt-16 sm:px-2 lg:px-5">
      <div className="max-w-xl mx-auto">
        {/* Review Card */}
        <div className="bg-white rounded-3xl shadow-lg p-2 sm:p-3 lg:p-5">
          
          {/* Quote Icon */}
          <div className="mb-6">
            <svg 
              className="w-12 h-12 sm:w-14 sm:h-14 text-teal-300 opacity-60" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
          </div>

          {/* Review Text */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
         {tastimonial}
          </p>

          {/* Dotted Divider */}
          <div className="border-t-2 border-dotted border-gray-300 mb-8"></div>

          {/* Reviewer Info */}
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-800 overflow-hidden">
                <img 
                  src={photoUrl} 
                  alt="Awlad Hossin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div>
              <h3 className="text-teal-900 text-lg sm:text-xl font-bold">
               {userName}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                Senior Product Designer
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;