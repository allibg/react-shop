import React from "react";

import { Row, Col, Container } from "reactstrap";
import categoryimg1 from "../../../assets/photos/category-01.png";
import categoryimg2 from "../../../assets/photos/category-02.png";
import categoryimg3 from "../../../assets/photos/category-03.png";
import categoryimg4 from "../../../assets/photos/category-04.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "FastFood",
    imgUrl: categoryimg1,
  },
  {
    display: "Pizza",
    imgUrl: categoryimg2,
  },
  {
    display: "Asian Food",
    imgUrl: categoryimg3,
  },
  {
    display: "Row Meat",
    imgUrl: categoryimg4,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((res, key) => (
          <Col lg="3" md="4" sm='6' xs='6' className="mb-4" key={key}>
            <div className="category__item d-flex align-items-center gap-3">
                <div className="category__img">
                    <img src={res.imgUrl} alt="category" />
                </div>
                <h6>{res.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
