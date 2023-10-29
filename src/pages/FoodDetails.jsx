import React, { useState, useEffect } from "react";

import { products } from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/product-details.css";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useDispatch } from "react-redux";
import ProductCard from "../components/UI/product-card/ProductCard";
const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = products.find((product) => product.id == id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { ids, title, price, image01, category, desc } = product;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userMsg,setUserMsg]=useState('');

  const relatedProducts = products.filter((item) => item.category == category);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        ids,
        title,
        image01,
        price,
      })
    );
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
  }

  useEffect(() => {
    setPreviewImg(image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="Product-details">
      <CommonSection title={product.title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2" sm='2'>
              <div className="product__images text-center">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-2"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" sm='4'>
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6" sm='6'>
              <div className="single__product-content">
                <h2 className="product__title mb-3">{product.title}</h2>
                <p className="product__price">
                  price: <span>${product.price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{product.category}</span>
                </p>
                <button className="addTOCart__btn" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={`${tab == "desc" && "tab__active"}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab == "rev" && "tab__active"}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>
              {tab == "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review">
                    <p className="user__name mb-0">akbar</p>
                    <p className="user__email">akbar@gmail.com</p>
                    <p className="feedback__text">Great product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">akbar</p>
                    <p className="user__email">akbar@gmail.com</p>
                    <p className="feedback__text">Great product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">akbar</p>
                    <p className="user__email">akbar@gmail.com</p>
                    <p className="feedback__text">Great product</p>
                  </div>

                  <form className="form" onSubmit={handleSubmit}>
                    <div className="form__group">
                      <input type="text" placeholder="Enter Your name" onChange={e=>setName(e.target.value)} required />
                    </div>

                    <div className="form__group">
                      <input type="email" placeholder="Enter Your email" onChange={e=>setEmail(e.target.value)} required />
                    </div>

                    <div className="form__group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Enter Your review"
                        onChange={e=>setUserMsg(e.target.value)} required
                      />
                    </div>

                    <button className="addTOCart__btn">Submit</button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>
            {relatedProducts.map((item) => (
              <Col lg="3" md="4" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
