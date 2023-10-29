import React, { useRef ,useEffect } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/photos/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import "../../styles/Header.css";
import { useSelector ,useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
const Header = () => {
    
    const totalQuantity=useSelector(state=>state.cart.totalQuantity);
    const dispatch=useDispatch();

    const toggleCart=()=>{
      dispatch(cartUiActions.toggle());
    }

    const stickyRef=useRef(null);
    useEffect(()=>{
      window.addEventListener('scroll' , ()=>{
        if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
          stickyRef.current.classList.add('header__shrink');
        }else{
          stickyRef.current.classList.remove('header__shrink');
        }
      })
    },[]);

    const menuRef=useRef(null);
    const toggleMenu=()=>menuRef.current.classList.toggle('show__menu');
  const nav__link = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Foods",
      path: "/foods",
    },
    {
      display: "Cart",
      path: "/cart",
    },
    {
      display: "Contact",
      path: "/contact",
    },
  ];
  return (
    <header ref={stickyRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>ali's Delivery</h5>
          </div>
          {/*========= navbar =========*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__link.map((res, key) => (
                <NavLink to={res.path} key={key}
                className={route=>route.isActive ? 'active__menu':''}
                onClick={toggleMenu}
                >
                  {res.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/*=======navbar right icons ==========*/}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart_icon" onClick={toggleCart}>
              <i className="ri-shopping-cart-fill"></i>
              <span className="cart__badge p-2">{totalQuantity}</span>
            </span>

          <span className="user">
            <Link to={'/login'}><i className="ri-user-line"></i></Link>
          </span>

          <span className="mobile__menu">
          <i className="ri-menu-fill" onClick={toggleMenu}></i>
          </span>
          
          </div>


        </div>
      </Container>
    </header>
  );
};

export default Header;
