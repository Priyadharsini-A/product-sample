import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaApple } from "react-icons/fa";
import { FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import "./Footer.css";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};
const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-black py-3">
      <Container>
        <Row>
          <Col md={2}>
            <h5>COMPANY INFO</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="link-style">
                  About
                </a>
              </li>
              <li>
                <a href="/mission" className="link-style">
                  Social Responsibility
                </a>
              </li>
              <li>
                <a href="/values" className="link-style">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="/values" className="link-style">
                  Fashion Blogger
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>HELP & SUPPORT</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/contact" className="link-style">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/faq" className="link-style">
                  Returns
                </a>
              </li>
              <li>
                <a href="/returns" className="link-style">
                  How to Order
                </a>
              </li>
              <li>
                <a href="/returns" className="link-style">
                  How to Track
                </a>
              </li>
              <li>
                <a href="/returns" className="link-style">
                  Size Chart
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>CUSTOMER CARE</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/help" className="link-style">
                  Contact US
                </a>
              </li>
              <li>
                <a href="/terms" className="link-style">
                  Payment
                </a>
              </li>
              <li>
                <a href="/privacy" className="link-style">
                  Bonus Point
                </a>
              </li>
              <li>
                <a href="/privacy" className="link-style">
                  Notices
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} className="d-flex flex-column">
            <div className="d-flex justify-content-between mb-3">
              <div>
                <h5>SOCIALS</h5>
                <FaFacebook size={32} style={{ marginRight: "10px" }} />
                <FaTwitter size={32} style={{ marginRight: "10px" }} />
                <FaInstagram size={32} style={{ marginRight: "10px" }} />
                <FaTiktok size={32} style={{ marginRight: "10px" }} />
                <FaSnapchatGhost size={32} style={{ marginRight: "10px" }} />
              </div>
              <div>
                <h5>PLATFORMS</h5>
                <FaApple size={32} style={{ marginRight: "10px" }} />
                <FaAndroid size={32} style={{ marginRight: "10px" }} />
              </div>
            </div>
            <div className="d-flex">
              <div>
                <Form.Control
                  type="text"
                  placeholder="Enter your email"
                  style={{
                    width: "500px",
                    height: "100%",
                    marginRight: "10px",
                  }}
                />
              </div>
              <div>
                <Button variant="dark">Subscribe</Button>
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <h6>
                By Clicking the Subscribe Button you are agreeing to our
                <a href="/cookie">Privacy and coookie policy</a>{" "}
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2010-2023. All rights reserved.</p>
            <p className="privay">
              <a href="/privacy" className="black-link">
                Privacy center
              </a>
              <a href="/privacy" className="black-link">
                Privacy & Cookie policy
              </a>
              <a href="/privacy" className="black-link">
                Manage Cookies
              </a>
            </p>

            <p>
              <a href="/privacy" className="black-link">
                Terms & Conditions
              </a>
              <a href="/privacy" className="black-link">
                Copyright Notice
              </a>
              <a href="/privacy" className="black-link">
                Imprint
              </a>
            </p>
          </Col>

          <Col
            md={6}
            className="d-flex justify-content-start align-items-center"
          >
            <div>
              <h5>WE ACCEPT</h5>
            </div>

            <img
              src="credit-card-image1.png"
              alt="Credit Card"
              className="mx-2"
            />
            <img
              src="credit-card-image2.png"
              alt="Credit Card"
              className="mx-2"
            />
            <img
              src="credit-card-image3.png"
              alt="Credit Card"
              className="mx-2"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
