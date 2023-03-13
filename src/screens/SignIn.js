import PrimaryButton from "../components/PrimaryButton";

function SignIn() {
  return (
    <div className="bg-gray-200 flex items-center justify-center h-[100vh]">
      <div className="h-[450px] w-[550px] bg-white rounded-md">
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
              className="w-[100%] px-3 focus:ring-0 decoration-0 outline-none border-none bg-[#E8EDF5] rounded-md py-[12px]"
            />
          </div>
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
          <PrimaryButton title="SignUP" />
        </div>
        <div className="flex items-center justify-center">
          <p>Don't have an account? Sign Up</p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
