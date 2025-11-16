import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../../../Components/HowItWorks/HowItWorks';
import OurServices from '../../../Components/OurServices/OurServices';
import Brands from '../Brands/Brands';
import ParcelFeatures from '../ParcelFeatures/ParcelFeatures';
import MerchantSatisfactionBanner from '../MerchantSatisfactionBanner/MerchantSatisfactionBanner';
import Reviews from '../Reviews/Reviews';


const reviewsPromise=fetch('/reviews.json').then(res=>res.json())
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <ParcelFeatures></ParcelFeatures>
      <MerchantSatisfactionBanner></MerchantSatisfactionBanner>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home; 