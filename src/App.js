import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeaderRootLayout } from "./pages/Root";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CartProvider from "./store/CartProvider";
import SignInPage, { action as signInAction } from "./pages/SignIn";
import RegisterPage, { action as registerAction } from "./pages/Register";
import CheckOutPage from "./pages/Checkout";
import {action as logoutAction} from "./pages/Logout";
import {checkAuthLoader, tokenLoader} from './util/auth'
import ResetPass from "./pages/ResetPass";
import {action as resetEmailAction} from './pages/ResetPass';
import {action as newPassAction} from './pages/NewPass'
import NewPass from "./pages/NewPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderRootLayout />,
    loader: tokenLoader,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      { path: "signIn", element: <SignInPage />, action: signInAction, loader: checkAuthLoader },
      { path: "register", element: <RegisterPage />, action: registerAction, loader:checkAuthLoader },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "checkout-success", element: <CheckOutPage /> },
      {path: "logout", action: logoutAction},
      {path: "reset", element: <ResetPass/>, action:resetEmailAction },
      {path: "new-pass/:token/:id", element: <NewPass/>, action:newPassAction}
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
