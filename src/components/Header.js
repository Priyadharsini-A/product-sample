import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { setSearchQuery, clearSearchQuery } from "../slices/SearchSlice";
import { BiCart } from "react-icons/bi";

const Header = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    dispatch(setSearchQuery(searchQuery));
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <h2 className="text-primary">
              <span>
                <i className="bi bi-yelp"></i>MoBooM
              </span>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "700px" }}
              onChange={handleSearch}
            />
            <Nav>
              <Nav.Link href="#home" className="fw-bold ">
                Store
              </Nav.Link>
              <Nav.Link href="#menu" className="fw-bold ms-3">
                Accout
              </Nav.Link>
              <Nav.Link href="#musttry" className="fw-bold ms-3">
                WishList
              </Nav.Link>
              <Nav.Link href="#contact" className="fw-bold ms-3">
                Basket
                <BiCart size={24} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
