import React from "react";

const App = () => {

  const submithandler=(e)=>{
    e.preventDefault();
    console.log("form submitted");
  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white w-87.5 p-5 rounded-xl shadow-md">

        <h1 className="text-2xl font-bold text-center mb-5">
          Create an Account
        </h1>

        <form onSubmit={(e)=>{
          submithandler(e);
        }} className="flex flex-col gap-3">

          {/* Name */}
          <input
            type="text"
            placeholder="Enter Name here"
            className="
              w-full
              px-3 py-2
              border border-gray-300
              rounded-md
              text-sm
              outline-none
              focus:border-indigo-500
              focus:ring-1
              focus:ring-indigo-500
            "
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Your Email"
            className="
              w-full
              px-3 py-2
              border border-gray-300
              rounded-md
              text-sm
              outline-none
              focus:border-indigo-500
              focus:ring-1
              focus:ring-indigo-500
            "
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            className="
              w-full
              px-3 py-2
              border border-gray-300
              rounded-md
              text-sm
              outline-none
              focus:border-indigo-500
              focus:ring-1
              focus:ring-indigo-500
            "
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="
              w-full
              px-3 py-2
              border border-gray-300
              rounded-md
              text-sm
              outline-none
              focus:border-indigo-500
              focus:ring-1
              focus:ring-indigo-500
            "
          />

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full
              bg-indigo-600
              hover:bg-indigo-700
              text-white
              font-semibold
              py-2
              rounded-md
              mt-2
              transition
            "
          >
            Submit
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-600 text-center leading-4 mt-1">
            By registering, you agree to our{" "}
            <span className="text-indigo-600 cursor-pointer">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-indigo-600 cursor-pointer">
              Privacy Policy.
            </span>
          </p>

        </form>

      </div>
    </div>
  );
};

export default App;