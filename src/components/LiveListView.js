import React from "react";
import PrimaryButton from "./PrimaryButton";

function LiveListView() {
  return (
    <div className="bg-gray-200 flex flex-col items-center pt-12 h-[100vh]">
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter username .."
          className="w-[300px] border-2 border-[#64707C] opacity-70 rounded-md"
        />
        <button className="border-2 border-black px-4  h-[40px] mx-5 rounded-md">
          Submit
        </button>
      </div>
      <div className="h-[470px] w-[550px] bg-white rounded-md my-10">
        <div className="flex items-center flex-col justify-center mt-10 mb-8">
          <h1 className="text-[28px] font-medium leading-[42px]">
            Gifter List
          </h1>
          <p>Total Users : 3548</p>
        </div>
        <div className="mx-10 flex justify-between">
          <div className="w-[50%] flex items-center justify-center">
            <p>USERNAME</p>
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <p>TIME</p>
          </div>
        </div>
        <div className="h-[180px]">
          <div className="h-5mx-10 flex">
            <div className="w-[50%] h-[200px] flex flex-col items-center justify-center overflow-y-scroll">
              {/*Left Col */}
              <p>Left Col</p>
              <p>Left Col</p>
              <p>Left Col</p>
              <p>Left Col</p>
              <p>Left Col</p>
              <p>Left Col</p>
              <p>Left Col</p>
              <p>Left Col</p>
              <p>Left Col</p>
              <p>Left Col</p>
              <p>Left Col</p>
              <p>Left Col</p>
              <p>Left Col</p>
              <p>Left Col</p>
            </div>
            <div className="w-[50%] h-[200px] flex flex-col items-center justify-center overflow-y-scroll">
              {/*Right Col */}
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
              <p>Right Col</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 mb-8 mx-10">
          <div className="w-[50%] flex items-center justify-center">
            <PrimaryButton title="Clear List" custom="bg-[#409FFF]" />
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <PrimaryButton title="Copy List" custom="bg-[#64707C] opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveListView;
