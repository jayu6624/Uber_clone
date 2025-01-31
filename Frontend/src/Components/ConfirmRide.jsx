import React, { useState } from "react";
import {
  ArrowDown,
  MapPinned,
  UserRoundSearch,
  MapPinCheckInside,
  BadgeIndianRupee
} from "lucide-react";
import Lookingfordriver from "./Lookingfordriver"; // Import the Lookingfordriver component

function ConfirmRide(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const backtolist = () => {
    props.backtovehicle();
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return <Lookingfordriver />;
  }

  return (
    <div className="font-sans">
      <div className=" confirm_ride bg-gray-100 rounded-t-lg w-full ">
        <h2 className="text-2xl font-bold bottom-0  m-auto flex justify-center items-center p-2">
          Confirm your ride
        </h2>
        <span>
          {" "}
          <button
            onClick={backtolist}
            className="absolute right-4 top-2 bg-white p-2 rounded-full hover:bg-gray-300"
          >
            <ArrowDown className="w-5 h-5 text-gray-700" />
          </button>
        </span>
        <div className="flex justify-center items-center">
          <img
            className="w-[40%] flex m-auto"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
            alt=""
          />
        </div>
        
        <div className="w-full p-5 ">
          <div className="flex justify-start items-center h-16   ">
            <span className="ml-3">
              <UserRoundSearch />
            </span>
            <div className="ml-3">
              <h3 className="text-lg font-bold">5612/11-A</h3>
              <p className="text-xs">
                rajkot Opposite Galaxy Mall, Rajkot - 360001, Gujarat, India
              </p>
            </div>
          </div>
          <div className="w-full border-b-2 border-[#00000035] rounded-3xl mt-3"></div>
          <div className="flex justify-start items-center h-16  mt-2">
            <span className="ml-3">
              <MapPinCheckInside />
            </span>
            <div className="ml-3">
              <h3 className="text-lg font-bold">1234/56-B</h3>
              <p>ahmedabad</p>
            </div>
          </div>
          <div className="w-full border-b-2 border-[#00000035] rounded-3xl mt-3"></div>
          <div className="flex justify-start items-center h-16  mt-2">
            <span className="ml-3">
              <BadgeIndianRupee /> 
            </span>
            <div className="ml-3">
              <h3 className="text-lg font-bold">₹190.20</h3>
              <p></p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center space-x-3">
          <button
            onClick={handleConfirm}
            className=" btn text-lg p-2 h-10 bg-green-700 font-semibold text-white rounded-lg"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmRide;
