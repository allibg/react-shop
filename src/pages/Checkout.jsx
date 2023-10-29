import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";
const Checkout = () => {

  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterPhone, setEnterPhone] = useState("");
  const [country, setCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [enterPostalCode, setEnterPostalCode] = useState("");

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  
  const totalAmount = cartTotalAmount + Number(shippingCost);

  const handleSubmit = (event) => {
    event.preventDefault();
    const ShippingData = {
      name: enterName,
      email: enterEmail,
      phone: enterPhone,
      country: country,
      city: enterCity,
      post: enterPostalCode,
    };
    console.log(ShippingData)
  };
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input
                    type="text"
                    onChange={(e) => setEnterName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    onChange={(e) => setEnterEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    onChange={(e) => setEnterPhone(e.target.value)}
                    placeholder="Enter your Phone Number"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    onChange={(e) => setEnterCity(e.target.value)}
                    placeholder="City"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    onChange={(e) => setEnterPostalCode(e.target.value)}
                    placeholder="Postal code"
                  />
                </div>
                <button type="submit" className="addTOCart__btn mb-3">Payment</button>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
