import React from 'react'

export default function RestaurantSignUp() {
  return (
    <div className="flex justify-between items-center w-[60%]  mt-20 ">
        <div className="w-[350px]">
            <img src="https://indianhut.nl/wp-content/uploads/2020/05/shape.png"/>
        </div>
        <div className="w-[60%] flex flex-col gap-2">
            <h3 className="text-center text-2xl font-semibold text-secondary">SignUp Page</h3>

            <div className="flex flex-col justify-center items-center ">
                <input type="text" placeholder="Enter Your Name" className="border w-[50%] min-w-[300px] outline-none p-1 text-gray-700"></input>
            </div>

            <div className="flex flex-col justify-center items-center ">
                <input type="text" placeholder="Enter Contact" className="border w-[50%] min-w-[300px] outline-none p-1 text-gray-700"></input>
            </div>

            <div className="flex flex-col justify-center items-center ">
                <input type="text" placeholder="Enter your Email id" className="border w-[50%] min-w-[300px] outline-none p-1 text-gray-700"></input>
            </div>

            <div className="flex flex-col justify-center items-center ">
                <input type="password" placeholder="Enter password" className="border w-[50%] min-w-[300px] outline-none p-1 text-gray-700"></input>
            </div>

            <div className="flex flex-col justify-center items-center ">
                <button className="border w-[50%] min-w-[300px] outline-none p-1 bg-secondary text-white mb-2">Login Now</button>
            </div>
        </div>
    </div>
  )
}
