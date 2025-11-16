import React, { use } from 'react';

const Reviews = ({reviewsPromise}) => {
  const review = use(reviewsPromise)
  console.log(review);
  return (
    <div>
      
    </div>
  );
};

export default Reviews;