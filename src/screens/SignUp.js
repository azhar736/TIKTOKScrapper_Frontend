import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
const BASE_URL = "http://localhost:9000/";
function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const senRequest = async (fullName, email, password, confirmPassword) => {
    try {
      const response = await axios.post(`${BASE_URL}register`, {
        fullName,
        email,
        password,
        confirmPassword,
      });
      const data1 = await response.data;
      console.log("The data from the API", data1);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    senRequest(fullName, email, password, confirmPassword);
  };
  return (
    <>
      <div className="bg-gray-200 flex items-center justify-center h-[100vh]">
        <div className="h-[650px] w-[550px] bg-white rounded-md">
          <div className="flex items-center justify-center mt-10 mb-8">
            <h1 className="text-[28px] font-medium leading-[42px]">
              Signup To Your Account{" "}
            </h1>
          </div>
          <form className="w-full flex flex-col items-center justify-center">
            <p className="text-left font-subHeading text-[18px] text-[#636363] font-semibold leading-[21px] mt-2 mr-[19rem]">
              Full Name
            </p>
            <div className="flex w-[70%] decoration-0 outline-none  border-opacity-70 my-2 rounded-md">
              <input
                type="text"
                name="fullname"
                onChange={(e) => setFullName(e.target.value)}
                className="w-[100%] px-3 focus:ring-0 decoration-0 outline-none border-none bg-[#E8EDF5] rounded-md py-[12px]"
              />
            </div>
            <p className="text-left font-subHeading text-[18px] text-[#636363] font-semibold leading-[21px] mt-2 mr-[21rem]">
              Email
            </p>
            <div className="flex w-[70%] decoration-0 outline-none  border-opacity-70 my-2 rounded-md">
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-[100%] px-3 focus:ring-0 decoration-0 outline-none border-none bg-[#E8EDF5] rounded-md py-[12px]"
              />
            </div>
            <p className="text-left font-subHeading text-[18px] text-[#636363] font-semibold leading-[21px] mt-2 mr-[19rem]">
              Password
            </p>
            <div className="flex w-[70%] decoration-0 outline-none  border-opacity-70 my-2 rounded-md">
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-[100%] px-3 focus:ring-0 decoration-0 outline-none border-none bg-[#E8EDF5] rounded-md py-[12px]"
              />
            </div>
            <p className="text-left font-subHeading text-[18px] text-[#636363] font-semibold leading-[21px] mt-2 mr-[15rem]">
              Confirm Password
            </p>
            <div className="flex w-[70%] decoration-0 outline-none  border-opacity-70 my-2 rounded-md">
              <input
                type="password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-[100%] px-3 focus:ring-0 decoration-0 outline-none border-none bg-[#E8EDF5] rounded-md py-[12px]"
              />
            </div>
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
