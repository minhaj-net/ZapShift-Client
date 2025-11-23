import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  CreditCard,
  Package,
  Mail,
  DollarSign,
  Shield,
  CheckCircle,
} from "lucide-react";

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: percelData, isLoading } = useQuery({
    queryKey: ["percelsa", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/percel/${id}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: percelData.cost,
      id: percelData._id,
      senderEmail: percelData.senderEmail,
      parcelName: percelData.parcelName,
    };

    try {
      const res = await axiosSecure.post(
        "/create-checkout-session",
        paymentInfo
      );
      console.log(res.data);

      // Redirect to Stripe checkout
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
          <p className="mt-4 text-xl font-semibold text-gray-700">
            Loading payment details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Secure Payment
          </h1>
          <p className="text-gray-600">Complete your parcel delivery payment</p>
        </div>

        {/* Main Payment Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
          {/* Blue Header Section */}
          <div className="bg-primary px-8 py-6">
            <h2 className="text-2xl font-bold  mb-2">Payment Summary</h2>
            <p>Review your order details below</p>
          </div>

          {/* Content Section */}
          <div className="px-8 py-8">
            {/* Parcel Details */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                <div className="flex-shrink-0 mt-1">
                  <Package className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                    Parcel Name
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    {percelData.parcelName}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                    Sender Email
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-gray-900 break-all">
                    {percelData.senderEmail}
                  </p>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Amount
                    </p>
                    <p className="text-4xl font-bold text-gray-900">
                      ${percelData.cost}
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                className="w-full bg-primary font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <CreditCard className="w-6 h-6" />
                <span className="text-lg">Proceed to Payment</span>
              </button>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md text-center">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700">
              Secure Payment
            </p>
            <p className="text-xs text-gray-500 mt-1">256-bit SSL Encryption</p>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md text-center">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700">
              Instant Confirmation
            </p>
            <p className="text-xs text-gray-500 mt-1">Real-time processing</p>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md text-center sm:col-span-2 md:col-span-1">
            <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mx-auto mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700">
              Multiple Options
            </p>
            <p className="text-xs text-gray-500 mt-1">Card & Digital Wallets</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 sm:mt-8 text-center px-4">
          <p className="text-xs sm:text-sm text-gray-500">
            By proceeding, you agree to our terms and conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
