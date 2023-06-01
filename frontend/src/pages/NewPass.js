import { json, redirect } from "react-router-dom";

import NewPassword from "../components/SingIn-components/NewPassword"

const NewPass = () => {
    return <NewPassword/>

}

export default NewPass;

export async function action({ request, params }) {
    const token = params.token;
    const id = params.id;

    const data = await request.formData();
    const resetData = {
      password: data.get("password"),
      token: token,
      id: id
    };
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/new-pass/:token/:id`, {
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
        throw json({message: 'Could not update a password'}, {status:500});
    }

    return redirect("/signIn")


}


  

