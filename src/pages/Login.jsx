import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:mx-w-96 m-auto mt-14  gap-4 text-gray-800 shadow-2xl rounded-2xl"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-[50%] px-3 py-2 border border-gray-800"
          placeholder="Enter Your Name...."
          required
        />
      )}
      <input
        type="email"
        className="w-[50%] px-3 py-2 border border-gray-800"
        placeholder="Enter Your Email...."
        required
      />
      <input
        type="password"
        className="w-[50%] px-3 py-2 border border-gray-800"
        placeholder="Enter Your Password...."
        required
      />
      <div className="w-[50%] flex justify-between text-sm mt-[-8px">
        <p className="cursor-pointer">Forgot Your Password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4 mb-10">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
