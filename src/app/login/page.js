import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-darkBlue">
      {/* Main Container */}
      <div className="flex w-full max-w-6xl bg-darkBlue rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 bg-darkBlue p-8 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-6 mb-6">
            {/* Sessions Card
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-sm text-gray-600">Sessions This Month</h3>
              <p className="text-3xl font-semibold text-gray-800">45.1k</p>
              <p className="text-sm text-green-500">+12.6%</p>
            </div> */}

            {/* Sales Card */}
            {/* <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-sm text-gray-600">Sales Last Year</h3>
              <p className="text-3xl font-semibold text-gray-800">175k</p>
              <p className="text-sm text-red-500">-16.2%</p>
            </div> */}
          </div>

          {/* Character Image */}
          <div className="flex justify-center">
            <img
              src="/assets/character-image.png" // Replace with your image path
              alt="User Character"
              className="w-60 h-60 object-contain"
            />
          </div>
        </div>

        {/* Right Section (Login Form) */}
        <div className="w-1/2 bg-white p-10 flex flex-col items-center justify-center space-y-6">
          {/* Logo */}
          <div className="text-3xl font-bold text-purple-700">
            <img
              src="/assets/contiant-logo.svg" // Replace with your logo image path
              alt="Contiant Logo"
              className="w-32 mb-6"
            />
          </div>

          {/* Form */}
          <form className="w-full space-y-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
            />

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="w-4 h-4 text-purple-700" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember Me
              </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800"
            >
              Sign In
            </button>
          </form>

          {/* Footer Links */}
          <div className="text-center text-sm text-gray-600 mt-4">
            <p>
              New on our platform?{" "}
              <a href="#" className="text-purple-700 hover:underline">
                Create an account
              </a>
            </p>
            <p>
              <a href="#" className="text-purple-700 hover:underline">
                Forgot Password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
