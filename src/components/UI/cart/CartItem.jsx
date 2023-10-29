import React from "react";

import { ListGroupItem } from "reactstrap";
import productImg from "../../../assets/photos/product_01.1.jpg";
import "../../../styles/cart-item.css";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({item}) => {
  const dispatch=useDispatch();
  const {id,title,price,image01,quantity,totalPrice}=item;
  const incrementItem=()=>{
    dispatch(cartActions.addItem(item));
  }
  const subtract=()=>{
    dispatch(cartActions.removeItem(id));
  }
  const deleteItem=()=>{
    dispatch(cartActions.deletItem(id));
  }
  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="productIMG" />
        <div className="cart__product-info d-flex align-items-center gap-4 justify-content-between w-100">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={subtract}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
