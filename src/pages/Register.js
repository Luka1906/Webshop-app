import { json, redirect } from "react-router-dom";
import RegisterForm from "../components/SingIn-components/Register"

const RegisterPage = () => {
    return <RegisterForm/>
  

}

export default RegisterPage;

export async function action ({request,params}) {
    const data = await request.formData();
    const registerData = {
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password')

    }
    const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    });

    if (response.status === 409) {
        return response
    }

    if(!response.ok) {
        console.log(response)
        throw json({message: 'Could not submit the form'}, {status:500});
       
    }
    const resData = await response.json();
 
    const token = resData.token;
    localStorage.setItem('token', token)
    
    return redirect('/signIn')
}

