import React from "react";
import Header from "../Header/Header";
import Routese from "../../routes/Routes";
import Footer from "../Footer/Footer";
import Carts from "../UI/cart/Carts";
import { useSelector } from "react-redux";
const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <>
      <Header />
      {showCart && <Carts />}
      <div>
        <Routese />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
