import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
const BASE_URL = "http://localhost:9000/";
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values) => {
        senRequest(values.email, values.password);
      },
      validationSchema: validationSchema,
    });

  const senRequest = async (email, password) => {
    try {
      console.log(`${BASE_URL}login`);
      const response = await axios.post(`http://localhost:9000/login`, {
        email,
        password,
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
    <div className="bg-gray-200 flex items-center justify-center h-[100vh]">
      <div className="h-[500px] w-[550px] bg-white rounded-md">
        <div className="flex items-center justify-center mt-10 mb-8">
          <h1 className="text-[28px] font-medium leading-[42px]">
            SignIn To Your Account{" "}
          </h1>
        </div>
        <form className="w-full flex flex-col items-center justify-center">
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
          {touched.password && errors.password && (
            <div className="w-[70%]">
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            </div>
          )}
        </form>
        <div className="flex items-center justify-center">
          <div className="flex justify-between items-center w-[70%] px-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-2 border-2 border-secondaryColor rounded-sm"
              />
              <p>Remeber Me</p>
            </div>
            <div>
              <p>Forgot Password?</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-5">
          <div className="flex justify-between items-center w-[70%] px-3">
            <PrimaryButton
              title="SignIn"
              custom="bg-[#409FFF]"
              action={handleSubmit}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p>
            Don't have an account?{" "}
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
