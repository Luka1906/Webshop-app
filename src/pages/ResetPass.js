import ResetPassword from "../components/SingIn-components/ResetPassword";
import ResetPasswordMessage from "../components/SingIn-components/ResetPasswordAlert";



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

  return (
    <>
    <div className="fixed top-0 left-0 w-full n h-screen z-20 shadow-backdrop-shadow"></div>
    <ResetPasswordMessage email = {resetData.email}/>
    </>
    
  )
}
