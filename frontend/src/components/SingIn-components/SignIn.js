import { useState } from "react";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";

const SignIn = () => {
  const invalidInput = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [show, setShow] = useState(false);

  const showPasswordHandler = () => {
    setShow(!show);
  };

  return (
    <div className="flex justify-center md:mt-0 mt-[6.5rem]">
      <Form method="POST" className="flex flex-col">
        <h2 className="mb-6 text-primary-color-red font-semi-bold-lato text-subtitle">
          Sign In
        </h2>
        {invalidInput && (
          <h2 className="text-center error-message text-lg">{invalidInput}</h2>
        )}
        <div className="mx-auto md:mx-0">
          <div className="mb-2 flex items-center gap-1 relative left-">
            <label className="text-sm " htmlFor="email">
              Email
            </label>
            <div className="text-primary-color-red">*</div>
          </div>
          <input
            name="email"
            type="email"
            className="border-gray-300 border p-2 w-[18rem] md:w-[25rem] mb-2 outline-4 outline-stone-600  "
          />
        </div>

        <div className="md:mx-0 mx-auto">
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
              className="border-gray-300 border p-2 w-[18rem] md:w-[25rem] outline-4 outline-stone-600  "
            />
            <div
              onClick={showPasswordHandler}
              className="absolute top-1/3 right-2 transform text-xs cursor-pointer"
            >
              {show ? "HIDE" : "SHOW"}
            </div>
            <div className="absolute right-0 mt-2 text-xs underline">
            <Link to="/reset">
              <div className="mb-0.5 active:scale-110">
                Forgot your password?
              </div>
            </Link>
            <div>
              <Link to="/register">
                <div className="active:scale-110">Not registered yet?</div>
              </Link>
            </div>
          </div>
          </div>

       
        </div>
        <button
          disabled={isSubmitting}
          className="mt-16  bg-orange-200 text-primary-color-red p-1.5 disabled:cursor-not-allowed active:scale-110  transform transition-all hover:translate-y-[-3px]  hover:bg-orange-300"
        >
          {isSubmitting ? "Submitting" : "Sign in"}
        </button>
      </Form>
    </div>
  );
};

export default SignIn;
