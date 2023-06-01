import { Form, useActionData } from "react-router-dom";

const ResetPassword = () => {
  const noEmailFoundError = useActionData();
  return (
    <div className="flex flex-col items-center gap-8 md:mt-0 mt-[6.5rem]">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-title text-primary-color-red">Forgot password?</h2>
        <p className="text-xs w-[18rem] md:w-[25rem] text-justify ">
          Please enter the email address you used to create your account, and
          we'll send you a link to reset your password
        </p>
      </div>
      <Form method="POST">
        <div className="mb-2 flex items-center gap-1">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <div className="text-primary-color-red">*</div>
        </div>
        <input
          name="email"
          type="email"
          className="border-gray-300 border p-2 w-[18rem] md:w-[25rem] mb-2 outline-4 outline-stone-600   "
        />
        <div>
        {noEmailFoundError && <p className="text-center error-message">{noEmailFoundError}</p>}
          <button
            className={`w-full mt-8 bg-orange-200 text-primary-color-red p-1.5 disabled:cursor-not-allowed active:scale-110  transform transition-all hover:translate-y-[-3px]  hover:bg-orange-300`}
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ResetPassword;
