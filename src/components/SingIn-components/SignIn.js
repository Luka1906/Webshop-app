import { useContext, useState } from "react";
import { Form,Link,useActionData,useNavigation } from "react-router-dom";
import CartContext from "../../store/cart-context";


const SignIn = () => {
  const invalidInput = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting"
  const [show, setShow] = useState(false);
  const cartContext = useContext(CartContext)


  const showPasswordHandler = () => {
    setShow(!show);
  };



  return (
    <div className="flex justify-center">
      <Form method="POST" className="flex flex-col">
        <h2 className="mb-6 text-primary-color-red font-semi-bold-lato text-subtitle">
          Sign In
        </h2>
       {invalidInput && <h2 className="text-center error-message text-lg">{invalidInput}</h2>}
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
          <Link to="/reset">
          <div className="absolute right-0 mt-2 text-xs underline">
            Forgot password?
          </div>
          </Link>
        
        </div>
        <button disabled={isSubmitting} className="mt-16 border-2 bg-orange-200 text-primary-color-red p-1">
          {isSubmitting? "Submitting" : "Sign in"}
        </button>
      </Form>
    </div>
  );
};

export default SignIn;
