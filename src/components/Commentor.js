import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import io from "socket.io-client";
import axios from "axios";
const BASE_URL = "http://localhost:9000/";
function Commentor() {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [nickName, setNickName] = useState([]);
  const [comments, setComments] = useState([]);
  const socket = io.connect("http://localhost:9000");

  socket.on("nickname", (data) => {
    // console.log('The Nickname===', data)
    handleNewData(data);
  });
  socket.on("comment", (data) => {
    // console.log('The Comment === ', data)
    handleComments(data);
  });

  // Function to handle new data
  const handleNewData = (newData) => {
    setNickName((prevData) => [...prevData, newData]);
  };
  // Function to handle new data
  const handleComments = (newData) => {
    setComments((prevData) => [...prevData, newData]);
  };
  const copyArrayData = () => {
    navigator.clipboard.writeText(JSON.stringify(comments));
  };
  const clearArrayData = () => {
    setComments([]);
  };

  const validateUserName = () => {
    if (!userName) {
      setUserNameError("Username is required");
      return false;
    } else {
      setUserNameError("");
      return true;
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (validateUserName()) {
      console.log(userName);
      try {
        const response = await axios.post(`${BASE_URL}getusers`, {
          user: userName,
        });
        const data1 = await response.data;
        console.log("The Data from API:", data1);
      } catch (error) {
        console.log("error", error.message);
      }
    }
  };
  return (
    <div className="bg-gray-200 flex flex-col items-center pt-12 h-[100vh]">
      <div className="flex  justify-center">
        <div>
          <input
            type="text"
            placeholder="Enter username .."
            onChange={(e) => setUserName(e.target.value)}
            className="w-[300px] border-2 border-[#64707C] opacity-70 rounded-md"
          />
          {userNameError && (
            <div className="pl-2">
              <p className="text-red-500 text-xs mt-1">{userNameError}</p>
            </div>
          )}
        </div>
        <button
          onClick={submit}
          className="border-2 border-black px-4  h-[40px] mx-5 rounded-md mt-1"
        >
          Submit
        </button>
      </div>
      <div className="h-[470px] w-[550px] bg-white rounded-md my-10">
        <div className="flex items-center flex-col justify-center mt-10 mb-8">
          <h1 className="text-[28px] font-medium leading-[42px]">
            Commenter List
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
          <div className="h-5 mx-10 flex">
            <div className="w-[50%] h-[200px] pl-5 flex flex-col items-center justify-center overflow-y-scroll">
              <ul className="px-2">
                {nickName.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </div>
            <div className="w-[50%] h-[200px] pl-5 flex flex-col items-center justify-center overflow-y-scroll">
              {/*Right Col */}
              <ul>
                {comments.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 mb-8 mx-10">
          <div className="w-[50%] flex items-center justify-center">
            <PrimaryButton
              title="Clear List"
              action={clearArrayData}
              custom="bg-[#409FFF]"
            />
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <PrimaryButton
              title="Copy List"
              action={copyArrayData}
              custom="bg-[#64707C] opacity-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commentor;
