import { json, redirect } from "react-router-dom";

import NewPassword from "../components/SingIn-components/NewPassword"

const NewPass = () => {
    return <NewPassword/>

}

export default NewPass;

export async function action({ request, params }) {
    console.log(params.token);
    console.log(params.id)

    const data = await request.formData();
    const resetData = {
      password: data.get("password"),
      token: params.token,
      id: params.id
    };
    const response = await fetch("http://localhost:4000/api/new-pass/:token/:id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resetData),
    });

    if(response.status === 400) {
        return response
    }

    if(!response.ok) {
        console.log(response)
        throw json({message: 'Could not update a password'}, {status:500});
    }

    return redirect("/signIn")


}


  

