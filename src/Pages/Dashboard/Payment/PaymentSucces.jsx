import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import {
  CheckCircle,
  Package,
  Mail,
  Home,
  FileText,
  Download,
} from "lucide-react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  // const [countdown, setCountdown] = useState(10);
  const [paymentInfo, setPaymentInfo] = useState();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  // console.log(sessionId);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            trackingId: res.data.trackingId,
            transactionId: res.data.transactionId,
            amount: res.data.amount,
          });
        });
    }
  }, [axiosSecure, sessionId]);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCountdown((prev) => {
  //       if (prev <= 1) {
  //         clearInterval(timer);
  //         navigate("/dashboard");
  //         return 0;
  //       }
  //       return prev - 1;
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [navigate]);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 py-6 sm:py-8 md:py-12 px-3 sm:px-4 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Success Animation Section */}
        <div className="text-center mb-6 sm:mb-8">
          {/* Animated Success Icon */}
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
            <div className="relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-linear-to-br from-green-400 to-emerald-500 rounded-full shadow-2xl">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white animate-bounce" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 px-4">
            Payment Successful!
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 px-4">
            Thank you for your payment. Your transaction has been completed
            successfully.
          </p>

          {/* Transaction ID */}
          <div className="inline-block bg-white rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 sm:py-3 shadow-md mx-4">
            <p className="text-xs sm:text-sm text-gray-500 mb-1">
              Transaction ID
            </p>
            <p className="text-sm sm:text-base md:text-lg font-mono font-semibold text-gray-900">
              {paymentInfo?.transactionId}
            </p>
          </div>
        </div>

        {/* Payment Details Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-4 sm:mb-6">
          {/* Header */}
          <div className="bg-linear-to-r from-green-500 to-emerald-500 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
              Payment Details
            </h2>
            <p className="text-xs sm:text-sm text-green-50">
              Your order has been confirmed
            </p>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-7 md:py-8">
            <div className="space-y-4 sm:space-y-5">
              {/* Amount Paid */}
              <div className="flex items-center justify-between p-3 sm:p-4 bg-green-50 rounded-lg sm:rounded-xl border-2 border-green-200">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">
                    Amount Paid
                  </p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">
                    ${paymentInfo?.amount}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-500" />
              </div>

              {/* Payment Method */}
              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                    Payment Method
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    Credit Card •••• 4242
                  </p>
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                    Date & Time
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    {new Date().toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Email Confirmation */}
              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-blue-50 rounded-lg sm:rounded-xl border border-blue-200">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-blue-900 mb-1">
                    Confirmation email sent!
                  </p>
                  <p className="text-xs sm:text-sm text-blue-700">
                    Check your inbox for payment receipt and order details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 sm:space-x-3"
          >
            <Home className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">Go to Dashboard</span>
          </button>

          <button
            onClick={() => window.print()}
            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 sm:space-x-3 border-2 border-gray-200"
          >
            <Download className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">Download Receipt</span>
          </button>
        </div>

        {/* Auto Redirect Notice */}
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-md text-center border border-gray-200">
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            Redirecting to dashboard in{" "}
            <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-green-100 text-green-600 font-bold rounded-full text-sm sm:text-base mx-1">
              {/* {countdown} */}
            </span>
            seconds
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="text-xs sm:text-sm text-green-600 hover:text-green-700 font-semibold underline"
          >
            Skip and go now
          </button>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md text-center">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mx-auto mb-1 sm:mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700">
              Verified
            </p>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md text-center">
            <Package className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-1 sm:mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700">
              Processing
            </p>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md text-center">
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mx-auto mb-1 sm:mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700">
              Email Sent
            </p>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md text-center">
            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500 mx-auto mb-1 sm:mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700">
              Receipt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
