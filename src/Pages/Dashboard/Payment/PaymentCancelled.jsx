import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { XCircle, AlertTriangle, Home, RotateCcw, Phone, Mail, MessageCircle } from "lucide-react";

const PaymentCancelled = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/dashboard");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleRetryPayment = () => {
    navigate(-1); // Go back to payment page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 py-6 sm:py-8 md:py-12 px-3 sm:px-4 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Cancelled Animation Section */}
        <div className="text-center mb-6 sm:mb-8">
          {/* Animated Cancel Icon */}
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-red-400 rounded-full animate-pulse opacity-20"></div>
            <div className="relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-red-400 to-orange-500 rounded-full shadow-2xl">
              <XCircle className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
            </div>
          </div>

          {/* Cancelled Message */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 px-4">
            Payment Cancelled
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 px-4">
            Your payment was not completed. Don't worry, no charges were made.
          </p>
          
          {/* Session ID */}
          <div className="inline-block bg-white rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 sm:py-3 shadow-md mx-4">
            <p className="text-xs sm:text-sm text-gray-500 mb-1">Session ID</p>
            <p className="text-sm sm:text-base md:text-lg font-mono font-semibold text-gray-900">
              SES-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
        </div>

        {/* Information Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-4 sm:mb-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
              What Happened?
            </h2>
            <p className="text-xs sm:text-sm text-red-50">
              Your transaction was cancelled
            </p>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-7 md:py-8">
            {/* Warning Notice */}
            <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-amber-50 rounded-lg sm:rounded-xl border-2 border-amber-200 mb-6">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 mb-1">
                  Transaction Cancelled
                </p>
                <p className="text-xs sm:text-sm text-amber-700">
                  You have cancelled the payment process. No amount has been charged from your account.
                </p>
              </div>
            </div>

            {/* Possible Reasons */}
            <div className="space-y-4 sm:space-y-5">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  Common Reasons for Cancellation:
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm text-gray-700">
                      You chose to cancel the transaction
                    </p>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Payment window was closed before completion
                    </p>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Session timeout or network issue occurred
                    </p>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Changed your mind about the purchase
                    </p>
                  </li>
                </ul>
              </div>

              {/* Next Steps */}
              <div className="bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-200">
                <h3 className="text-sm sm:text-base font-semibold text-blue-900 mb-2">
                  What's Next?
                </h3>
                <p className="text-xs sm:text-sm text-blue-700">
                  You can retry the payment anytime or contact our support team if you need assistance. Your order is still saved in your account.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <button
            onClick={handleRetryPayment}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 sm:space-x-3"
          >
            <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">Retry Payment</span>
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 sm:space-x-3 border-2 border-gray-200"
          >
            <Home className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">Go to Dashboard</span>
          </button>
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-4 sm:mb-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Need Help?
            </h3>
          </div>
          
          <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
            <p className="text-xs sm:text-sm text-gray-600 mb-4">
              Our support team is here to assist you 24/7
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center space-x-2 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-200"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <span className="text-xs sm:text-sm font-semibold text-green-700">Call Us</span>
              </a>
              
              <a
                href="mailto:support@example.com"
                className="flex items-center justify-center space-x-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700">Email Us</span>
              </a>
              
              <button
                onClick={() => navigate("/support/chat")}
                className="flex items-center justify-center space-x-2 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors border border-purple-200"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                <span className="text-xs sm:text-sm font-semibold text-purple-700">Live Chat</span>
              </button>
            </div>
          </div>
        </div>

        {/* Auto Redirect Notice */}
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-md text-center border border-gray-200">
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            Redirecting to dashboard in{" "}
            <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-red-100 text-red-600 font-bold rounded-full text-sm sm:text-base mx-1">
              {countdown}
            </span>
            seconds
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="text-xs sm:text-sm text-red-600 hover:text-red-700 font-semibold underline"
          >
            Skip and go now
          </button>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md text-center">
            <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mx-auto mb-1 sm:mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700">Cancelled</p>
          </div>
          
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md text-center">
            <RotateCcw className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-1 sm:mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700">Retry Available</p>
          </div>
          
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md text-center">
            <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mx-auto mb-1 sm:mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700">Support 24/7</p>
          </div>
          
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md text-center">
            <Home className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500 mx-auto mb-1 sm:mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700">Safe & Secure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;