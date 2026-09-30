import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import User from "./components/User"; 

const App = () => {

 const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [error, setError] = useState("");

  const [users, setUsers] = useState([]);


  const handleChanges=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setFormData((prevData)=>({
      ...prevData,
      [name]:value
    }))

  } 


  const submithandler=(e)=>{
    e.preventDefault();
    console.log("form submitted");

    if(formData.password.length<8){
      setError("Password must be at least 8 characters long");
      return;
    }

    if(formData.password!==formData.confirmPassword){
      setError("Password and Confirm Password do not match");
      return;
    }

    if(!/[!@#$%^&*()<>,."]/.test(formData.password)){
      setError("Password must contain at least one special character");
      return;
    }

    if(!/[A-Z]/.test(formData.password)){
      setError("Password must contain at least one uppercase letter");
      return;
    } 

    setUsers((prevUsers) => [
      ...prevUsers,
      {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      }
    ]);

    setError("");
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

   

    toast('Login successfull !', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  return (
    <>
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
            required
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
            name="fullName"
            value={formData.fullName} 
            onChange={handleChanges}
          />

          {/* Email */}
          <input
            type="email"
            required
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
            name="email"
            value={formData.email}
            onChange={handleChanges}
          />

          {/* Password */}
          <input
            type="password"
            required
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
            name="password"
            value={formData.password}
            onChange={handleChanges}
          />

          {/* Confirm Password */}
          <input
            type="password"
            required
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
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChanges}
          />

            {error && (
              <p className='text-red-600 text-sm text-center font-medium'>{error}</p>
            )}

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
        <div>
          <ToastContainer>

          </ToastContainer>
        </div>

      </div>

    </div>
    
      {users.map(function(elem,idx){
        return <User elem={elem} />
      })}
    </>
  );
};

export default App;