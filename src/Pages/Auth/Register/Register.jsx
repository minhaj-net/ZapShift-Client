import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log("after registation from in data ", data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.massege);
      });
  };
  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          <h3 className="text-3xl font-black w-[320px]">Create an Account</h3>
          <p className="text-gray-700 ">Register with ZapShift</p>
          {/* name field */}
          <label className="label">Name</label>
          <input type="email" className="input" placeholder="Your Name" />

          {/* Email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {/* password filed */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z]).+$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">password required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 character or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must contain at least one uppercase letter
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary text-black mt-4">Register</button>
          <p>
            Already have an account?{" "}
            <Link className="text-[#8FA748]" to={"/login"}>
              Login
            </Link>{" "}
          </p>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
