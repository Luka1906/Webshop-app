import ResetPassword from "../components/SingIn-components/ResetPassword";
import { redirect } from "react-router-dom";

const ResetPass = () => {
  return <ResetPassword />;
};

export default ResetPass;

export async function action({ request, params }) {
  const data = await request.formData();
  const resetData = {
    email: data.get("email"),
  };
  const response = await fetch("http://localhost:4000/api/reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resetData),
  });

  if (response.status === 400) {
    return response;
  }

  return redirect("/");
}
