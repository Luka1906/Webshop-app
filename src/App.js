import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HeaderRootLayout} from "./pages/Root";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<HeaderRootLayout/>,
    children: [
      {index:true, element: <HomePage/>}
    ]
  }

])

function App() {
 return (
  <RouterProvider router={router}/>
 )
 
}

export default App;
