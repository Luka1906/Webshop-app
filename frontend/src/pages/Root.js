import Navbar from "../components/Main-components/Navbar";
import Footer from "../components/Main-components/Footer";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cart from "../components/Product-Page-components/cart/Cart";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

export const HeaderRootLayout = () => {
  let location = useLocation();
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) { 
      return;
    }

    if (token === "EXPIRED ") {
      submit(null, { action: "logout", method: "POST" });
      return;
    }

    const tokenDuration = getTokenDuration();
 
    setTimeout(() => {
      submit(null, { action: "logout", method: "POST" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <Navbar pathname={location.pathname} />
      <Cart />
      <Outlet />
      <Footer />
    </>
  );
};
