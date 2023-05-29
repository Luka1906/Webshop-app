import { useState } from "react";
import { Link,useActionData, useNavigation } from "react-router-dom";
import { Form } from "react-router-dom";
import useInput from "../../hooks/use-input";
import {GiConfirmed} from 'react-icons/gi'

const RegisterForm = () => {
  const existingUserError = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  const [show, setShow] = useState(false);
  const [confirmPassShow, setConfirmPassShow] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("")

  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );

  const passwordRegex = new RegExp(
    /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,30}$/
  );

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim().length >= 6 && value.trim().length <=30);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => emailRegex.test(value));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => passwordRegex.test(value));

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
    
  }

  const passwordMatched = enteredPassword === confirmPassword


  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid && passwordMatched) {
    formIsValid = true;
  }

  const showPasswordHandler = () => {
    setShow(!show);
  };

  const showConfirmPasswordHandler = () => {
    setConfirmPassShow(!confirmPassShow);
  };

  const nameInputClasses = nameHasError? 'invalid' : "";
  const emailInputClasses = emailHasError? 'invalid' : "";
  const passwordInputClasses = passwordHasError? 'invalid' : "";

  return (
    <div className="flex justify-center md:mt-0 mt-[6.5rem] ">
      <Form method="POST" className="flex flex-col">
        <h2 className="mb-6 text-primary-color-red font-semi-bold-lato text-subtitle">
          Register here
        </h2> 
        <div className="mb-2 flex items-center gap-1 ">
          <label className="text-sm" htmlFor="name">
            Name
          </label>
          <div className="text-primary-color-red">*</div>
        </div>
        <div className={nameInputClasses}>
        <input
          name="name"
          type="text"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          className="border-gray-300 border p-2 md:w-[25rem] w-[18rem]  mb-2 outline-4 outline-stone-600  "
        />
          {nameHasError && (
              <p className="error-message text-xs">
                Name must be at least 6 characters long!
              </p>
            )}
        </div>
      
        <div className="mb-2 flex items-center gap-1 ">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <div className="text-primary-color-red">*</div>
        </div>
        <div className={emailInputClasses}>
        <input
          name="email"
          type="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          className="border-gray-300 border p-2 md:w-[25rem] w-[18rem]  mb-2 outline-4 outline-stone-600  "
        />  
         {emailHasError && (
          <p className="error-message text-xs">
            Please enter a valid email!
          </p>
        )}

        </div>

        <div className="mb-2 flex items-center gap-1">
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <div className="text-primary-color-red">*</div>
        </div>
        <div className="relative">
          <div className={passwordInputClasses}>
          <input
            name="password"
            type={show ? "text" : "password"}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
            className="border-gray-300 border p-2 md:w-[25rem] w-[18rem]  outline-4 outline-stone-600  "
          />
          </div>
      
          <div
            onClick={showPasswordHandler}
            className="absolute top-1/3 right-2 transform text-xs cursor-pointer"
          >
            {show ? <p className="font-semi-bold-lato">HIDE</p> : <p className="font-semi-bold-lato">SHOW</p>}
          </div>
        </div>
        {passwordHasError && (
            <ul className="error-message text-xs w-[18rem]">
             Password must:
              <li>Be minimum 6 characters and maximum 30 characters long</li>
              <li>Have one uppercase letter</li>
              <li>Have one lowercase letter</li>
              <li>Have one special character</li>
            </ul>
          )}
        <div className="mb-2 flex items-center gap-1">
          <label className="text-sm mt-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="text-primary-color-red">*</div>
        </div>
        <div className="relative">
          <input
            name="confirmPassword"
            type={confirmPassShow ? "text" : "password"}
            className="border-gray-300 border p-2 md:w-[25rem] w-[18rem]  outline-4 outline-stone-600  "
            onChange={confirmPasswordHandler}
          />
          <div
            onClick={showConfirmPasswordHandler}
            className="absolute top-1/3 right-2 transform text-xs cursor-pointer outline-4 outline-stone-600  "
          >
            {confirmPassShow ? <p className="font-semi-bold-lato">HIDE</p> : <p className="font-semi-bold-lato">SHOW</p>}
          </div>
        </div>
        <div className="relative">
        {confirmPassword === enteredPassword && enteredPasswordIsValid ? <p className="absolute right-0 md:right-[-2rem] top-[0.2rem] md:top-[-1.8rem]"><GiConfirmed className="success text-lg"/></p> : ""}
        {existingUserError && (
              <p className="error-message text-center relative top-4 md:top-3 md:text-[1.15rem]">{existingUserError}</p>
            )}

        </div>
      
        <button disabled={!formIsValid || isSubmitting} className={`mt-8  bg-orange-200 text-primary-color-red p-1.5 disabled:cursor-not-allowed active:scale-110  transform transition-all hover:translate-y-[-3px]  hover:bg-orange-300`}>
          {isSubmitting? 'Submitting' : "Register"}
        </button>
      </Form>
    </div>
  );
};

export default RegisterForm;
