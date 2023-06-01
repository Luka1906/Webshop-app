import SignIn from "../components/SingIn-components/SignIn";
import { json } from "react-router-dom";
import { redirect } from "react-router-dom";

const SignInPage = () => {
  return <SignIn />;
};

export default SignInPage;

export async function action({ request, params }) {


  const data = await request.formData();
  const signInData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signInData),
  });

  if (response.status === 400) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not logIn" }, { status: 500 });
  }
  const resData = await response.json();
 
  const token = resData.token;
  localStorage.setItem('token', token);
  
  const expiration = new Date();
  
  expiration.setHours(expiration.getHours() + 1);
  
  localStorage.setItem('expirationDate', expiration.toISOString())

  return redirect("/products");

}
