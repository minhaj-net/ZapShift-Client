import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignIn = (data) => {
    console.log("from data", data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.massege);
      });
  };
  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(handleSignIn)}>
        <fieldset className="fieldset">
          <h3 className="text-3xl font-black w-[320px]">Welcome Back</h3>
          <p className="text-gray-700 ">Register with ZapShift</p>

          {/* Email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && <p>Email is required </p>}
          {/* password filed */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && <p>Password is required</p>}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary text-black mt-4">Login</button>
          <p>
            Don’t have any account?{" "}
            <Link className="text-[#8FA748]" to={"/register"}>
              Register
            </Link>{" "}
          </p>
       
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
