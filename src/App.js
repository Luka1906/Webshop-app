import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HeaderRootLayout} from "./pages/Root";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CartProvider from "./store/CartProvider";
import SignInPage from "./pages/SignIn";
import RegisterPage from "./pages/Register";



const router = createBrowserRouter([
  {
    path: "/",
    element:<HeaderRootLayout/>,
    children: [
      {index:true, element: <HomePage/>},
      {path: "signIn", element: <SignInPage/>},
      {path: "register", element: <RegisterPage/>},
      {path: "products", element: <ProductsPage/>},
      {path:"products/:id", element: <ProductDetail/>}

      
    ]
  }

])

function App() {
 return (
  <CartProvider>
  <RouterProvider router={router}/>
  </CartProvider>

 )
 
}

export default App;
