import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { useFormik } from "formik";
import * as Yup from "yup";
const BASE_URL = "http://localhost:9000/";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Full Name must be at least 2 characters")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
function SignUp() {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values) => {
        // console.log(values);
        senRequest(
          values.fullname,
          values.email,
          values.password,
          values.confirmPassword
        );
      },
      validationSchema: validationSchema,
    });
  const senRequest = async (fullname, email, password, confirmPassword) => {
    // console.log(fullname, email, password, confirmPassword);
    try {
      console.log(`${BASE_URL}login`);
      const response = await axios.post(`http://localhost:9000/register`, {
        fullname,
        email,
        password,
        confirmPassword,
      });
      const data1 = await response.data;
      console.log("The data from the API", data1.authToken);
      localStorage.setItem("Auth-Token", data1.authToken);
      navigate("/dashboard");
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <>
      <div className="bg-gray-200 flex items-center justify-center h-[100vh]">
        <div className="h-[670px] w-[550px] bg-white rounded-md">
          <div className="flex items-center justify-center mt-6 mb-6">
            <h1 className="text-[28px] font-medium leading-[42px]">
              Signup To Your Account{" "}
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center justify-center"
          >
            <p className="text-left font-subHeading text-[18px] text-[#636363] font-semibold leading-[21px] mt-2 mr-[19rem]">
              Full Name
            </p>
            <div className="flex w-[70%] decoration-0 outline-none  border-opacity-70 my-2 rounded-md">
              <input
                type="text"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
                // onChange={(e) => setFullName(e.target.value)}
                className="w-[100%] px-3 focus:ring-0 decoration-0 outline-none border-none bg-[#E8EDF5] rounded-md py-[12px]"
              />
            </div>
            {touched.fullname && errors.fullname && (
              <div className="w-[70%]">
                <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>
              </div>
            )}
            <p className="text-left font-subHeading text-[18px] text-[#636363] font-semibold leading-[21px] mt-2 mr-[21rem]">
              Email
            </p>
            <div className="flex w-[70%] decoration-0 outline-none  border-opacity-70 my-2 rounded-md">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[100%] px-3 focus:ring-0 decoration-0 outline-none border-none bg-[#E8EDF5] rounded-md py-[12px]"
              />
            </div>
            {/* Email input */}
            {touched.email && errors.email && (
              <div className="w-[70%]">
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              </div>
            )}
            <p className="text-left font-subHeading text-[18px] text-[#636363] font-semibold leading-[21px] mt-2 mr-[19rem]">
              Password
            </p>
            <div className="flex w-[70%] decoration-0 outline-none  border-opacity-70 my-2 rounded-md">
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[100%] px-3 focus:ring-0 decoration-0 outline-none border-none bg-[#E8EDF5] rounded-md py-[12px]"
              />
            </div>
            {/* Password input */}
            {touched.password && errors.password && (
              <div className="w-[70%]">
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              </div>
            )}
            <p className="text-left font-subHeading text-[18px] text-[#636363] font-semibold leading-[21px] mt-2 mr-[15rem]">
              Confirm Password
            </p>
            <div className="flex w-[70%] decoration-0 outline-none  border-opacity-70 my-2 rounded-md">
              <input
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-[100%] px-3 focus:ring-0 decoration-0 outline-none border-none bg-[#E8EDF5] rounded-md py-[12px]"
              />
            </div>
            {/* Confirm Password input */}
            {touched.confirmPassword && errors.confirmPassword && (
              <div className="w-[70%]">
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              </div>
            )}
          </form>
          <div className="flex items-center justify-center my-5">
            <div className="flex justify-between items-center w-[70%] px-3">
              <PrimaryButton
                title="SignUP"
                custom="bg-[#409FFF]"
                action={handleSubmit}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p>
              Already have an account?{" "}
              <span
                className="cursor-pointer"
                onClick={() => navigate("/login")}
              >
                SignIn
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
