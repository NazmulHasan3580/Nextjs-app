"use client";
import React from "react";
import RestaurantSignUp from "../_components/restaurantSignUp";
import RestaurantLogin from "../_components/restaurantLogin";
import { useState } from "react";

export default function Restaurant() {
  const [Login, setLogin] = useState(true);
  return (
    <div className="container 2xl:auto xl:auto lg:auto md:auto sm:auto">
      <div className="flex justify-center items-center flex-col">
        {Login ? <RestaurantLogin /> : <RestaurantSignUp />}
        
        <div className="flex flex-col justify-center items-center ">
            <button
            onClick={() => setLogin(!Login)}
            className=" min-w-[300px] w-[50%] text-blue-500"
        >
            {Login ? <div className="text-red-700">Do not have Account? SignUp</div> : <div className="text-green-600">Already have Account</div>}
        </button>
        </div>
       
      </div>

    </div>
  );
}
