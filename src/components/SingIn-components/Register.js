import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [show, setShow] = useState(false);
  const [confirmPassShow,setConfirmPassShow] = useState(false)

  const showPasswordHandler = () => {
    setShow(!show);
  };

  const showConfirmPasswordHandler = () => {
    setConfirmPassShow(!confirmPassShow)
  }
  return (
    <div className="flex justify-center">
      <form className="flex flex-col">
        <h2 className="mb-6 text-primary-color-red font-semi-bold-lato text-subtitle">
          Register here
        </h2>
        <div className="mb-2 flex items-center gap-1">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <div className="text-primary-color-red">*</div>
        </div>
        <input
          name="email"
          type="email"
          className="border-gray-300 border p-2 w-[25rem] mb-2"
        />
        <div className="mb-2 flex items-center gap-1">
          <label className="text-sm" htmlFor="email">
            Password
          </label>
          <div className="text-primary-color-red">*</div>
        </div>
        <div className="relative">
          <input
            name="password"
            type={show ? "text" : "password"}
            className="border-gray-300 border p-2 w-[25rem]"
          />
          <div
            onClick={showPasswordHandler}
            className="absolute top-1/3 right-2 transform text-xs cursor-pointer"
          >
            {show ? "HIDE" : "SHOW"}
          </div>
        </div>
        <div className="mb-2 flex items-center gap-1">
          <label className="text-sm mt-2" htmlFor="email">
            Confirm Password
          </label>
          <div className="text-primary-color-red">*</div>
        </div>
        <div className="relative">
          <input
            name="password"
            type={confirmPassShow ? "text" : "password"}
            className="border-gray-300 border p-2 w-[25rem]"
          />
          <div
            onClick={showConfirmPasswordHandler}
            className="absolute top-1/3 right-2 transform text-xs cursor-pointer"
          >
            {confirmPassShow ? "HIDE" : "SHOW"}
          </div>
        </div>
  

        <button className="mt-8 border-2 bg-orange-200 text-primary-color-red p-1">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
