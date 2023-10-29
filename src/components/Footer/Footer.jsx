import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Label,
} from "reactstrap";
import logo from "../../assets/photos/res-logo.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import FormGroup from "react-bootstrap/FormGroup";
import Form from "react-bootstrap/Form";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5 className="my-3">ali's Delivery</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                temporibus voluptatibus iste, libero delectus laboriosam tempora
                necessitatibus ab fuga fugiat tenetur accusamus eius excepturi
                expedita repudiandae accusantium error veritatis quam.{" "}
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5>Delivery Time</h5>
            <ListGroup className="deliver_time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Saturday-Wednesday</span>
                <p>9:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Thursday-Friday</span>
                <p>12:00am - 9:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5>Contact Us</h5>
            <ListGroup className="deliver_time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>
                  Phone:
                  <Link to={"tel:09933665300"} className="text-decoration-none">
                    09933665300
                  </Link>
                </span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>
                  site :{" "}
                  <Link
                    to={"http://webbg.ir/"}
                    className="text-decoration-none"
                  >
                    webbg.ir
                  </Link>
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5>News</h5>
            <Form className="Form-group position-relative">
              <Label>set your email for news</Label>
              <FormControl placeholder="ali.bg1385@gmail.com" />
              <i className="ri-send-plane-2-line" id="send_btn"></i>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6" className="mt-1">
            <p className="copyright__text">Copyright - 2023,website made by Ali Bagheri (webbg.ir)</p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                <p className="m-0">Follow me:</p>
                <span> <Link target="_blank" to='https://www.instagram.com/ali.bg1385' className="text-decoration-none"><i className="ri-instagram-line"></i></Link> </span>
                <span>
                    <Link target="_blank" to='https://www.github.com/allibg' className="text-decoration-none"><i className="ri-github-fill"></i></Link>
                </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
