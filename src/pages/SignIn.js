import SignIn from "../components/SingIn-components/SignIn";
import { json } from "react-router-dom";
import { redirect } from "react-router-dom";

const SignInPage = () => {
    return (
        <SignIn/>

    )
   

}

export default SignInPage

export async function action ({request,params}) {
    const data = await request.formData();
    const signInData = {
        email: data.get('email'),
        password: data.get('password')

    }
    const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signInData)
    });

    if (response.status === 400) {
        return response
    }

  
    if(!response.ok) {
        console.log(response)
        throw json({message: 'Could not logIn'}, {status:500});
       
    }
    return redirect('/checkout-success')
}
