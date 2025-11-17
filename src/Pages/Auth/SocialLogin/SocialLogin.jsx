import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";

const SocialLogin = () => {
  const { handleGoogleSignIn } = useAuth();

  const handleGoogleCreatUser = () => {
    handleGoogleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <p className="text-center text-gray-700">or</p>
      <button
        onClick={handleGoogleCreatUser}
        className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <FcGoogle className="text-2xl" />
        <span className="font-medium">Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
