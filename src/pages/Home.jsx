import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import HeroImg from "../assets/photos/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import "../styles/home.css";

import Category from "../components/UI/category/Category";
import featureimg01 from "../assets/photos/service-01.png";
import featureimg02 from "../assets/photos/service-02.png";
import featureimg03 from "../assets/photos/service-03.png";
import { products } from "../assets/data/products";
import foodCategoryImg01 from "../assets/photos/hamburger.png";
import foodCategoryImg02 from "../assets/photos/pizza.png";
import foodCategoryImg03 from "../assets/photos/bread.png";
import ProductCard from "../components/UI/product-card/ProductCard";
import whyimg from "../assets/photos/location.png";
import networkImg from "../assets/photos/network.png";
import Sliderr from "../components/UI/slider/Slider";

const featureData = [
  {
    title: "Quick Delivery",
    img_URL: featureimg01,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sapiente neque eius soluta rem illum tempore atque non porro facere deleniti, iusto vero accusamus, vitae, voluptatibus optio? Vitae, laboriosam numquam!",
  },
  {
    title: "Super Dine In",
    img_URL: featureimg02,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sapiente neque eius soluta rem illum tempore atque non porro facere deleniti, iusto vero accusamus, vitae, voluptatibus optio? Vitae, laboriosam numquam!",
  },
  {
    title: "Easy Pick Up",
    img_URL: featureimg03,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sapiente neque eius soluta rem illum tempore atque non porro facere deleniti, iusto vero accusamus, vitae, voluptatibus optio? Vitae, laboriosam numquam!",
  },
];
const Home = () => {
  const [hotPizza, setHotPizza] = useState([]);
  useEffect(() => {
    const filteredPizza = products.filter((res) => res.category === "Pizza");
    const slicedPizza = filteredPizza.slice(0, 4);
    setHotPizza(slicedPizza);
  }, []);

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filtered = products.filter((item) => item.category === "Burger");
      setAllProducts(filtered);
    }
    if (category === "PIZZA") {
      const filtered = products.filter((item) => item.category === "Pizza");
      setAllProducts(filtered);
    }
    if (category === "BREAD") {
      const filtered = products.filter((item) => item.category === "Bread");
      setAllProducts(filtered);
    }
  }, [category]);
  return (
    <Helmet title=" home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="hero__title mb-4">
                  <span>HUNGRY?</span>Just wait <br /> food at
                  <span> your door</span>
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur quasi voluptatem, odio expedita voluptates nulla
                  hic, accusamus, nihil ipsa esse fugit. Dolorum, amet nesciunt.
                  Id placeat error doloremque quibusdam ipsum!
                </p>
              </div>

              <div className="hero__btns d-inline-flex align-items-center gap-5 ">
                <button className="order__btn d-flex align-items-center justify-content-between">
                  Order now <i className="ri-arrow-right-s-line"></i>
                </button>

                <button className="all__foods-btn">
                  <Link to="/foods">see all foods</Link>
                </button>
              </div>

              <div className=" hero__service d-flex align-items-center gap-5 mt-5">
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i className="ri-car-line"></i>
                  </span>
                  {"  "}
                  No shipping charge
                </p>
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i className="ri-shield-check-line"></i>
                  </span>
                  {"  "}
                  100% Secure Checkout
                </p>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={HeroImg} alt="heriImg" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="feature__text mb-1 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                ratione nisi deserunt reprehenderit sint reiciendis quam est in
                veritatis ex ipsam atque illo, vitae officia accusantium nostrum
                quaerat nesciunt ea.
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                qui.
              </p>
            </Col>

            {featureData.map((res, key) => (
              <Col lg="4" md="6" sm='6' key={key} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img src={res.img_URL} className="w-25 mb-3" />
                  <h5 className="fw-bold mb-3">{res.title}</h5>
                  <p>{res.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  ALL
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((res) => (
              <Col lg="3" md="6" key={res.id} className="mt-5 text-center me-auto ms-auto">
                <ProductCard item={res} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyimg} alt="" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__ali">
                <h2 className="ali__title mb-4">
                  why <span>ali's delivery ?</span>{" "}
                </h2>
                <p className="ali__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque quas laudantium voluptatum cumque rerum?e.
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> fresh and tasty
                      foods
                    </p>
                    <p className="ali__desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. i
                      quibusdam.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Quality Support
                    </p>
                    <p className="ali__desc">Lorem ipsum dolor m deleniti.</p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Order from any
                      location
                    </p>
                    <p className="ali__desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem tempore similique prae.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((res) => (
              <Col lg="3" md="4" className="text-center" key={res.id}>
                <ProductCard item={res} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={networkImg} className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="network">
                <h5 className="network__subtitle mb-4">Network Datas</h5>
                <h2 className="network__title mb-3">what our <span>customers</span> are saying</h2>
                <p className="network__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus animi corporis ducimus omnis officia totam mollitia dignissimos, aut maxime sunt labore pariatur voluptas odio cupiditate minima ex, fuga sapiente.</p>
                <Sliderr />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
