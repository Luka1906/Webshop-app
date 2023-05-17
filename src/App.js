import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeaderRootLayout } from "./pages/Root";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CartProvider from "./store/CartProvider";
import SignInPage, { action as signInAction } from "./pages/SignIn";
import RegisterPage, { action as registerAction } from "./pages/Register";
import CheckOutPage from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderRootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "signIn", element: <SignInPage />, action: signInAction },
      { path: "register", element: <RegisterPage />, action: registerAction },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "checkout-success", element: <CheckOutPage /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
