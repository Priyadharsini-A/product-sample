import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategoriesFromServer,
  getTaskFromServer,
} from "../slices/ProductSlice";
import {
  Container,
  Row,
  Col,
  Card,
  Pagination,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import StarRating from "./StarRating";

const cardStyle = {
  height: "100%",
};
const productsPerPage = 12;

const Dashboard = () => {
  const { productList, isLoading, error, categories } = useSelector(
    (state) => state.products
  );
  const searchQuery = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(getTaskFromServer());
    dispatch(getCategoriesFromServer());
  }, [dispatch]);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  useEffect(() => {
    let filtered = productList.products || [];

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(lowercaseQuery) ||
          product.description.toLowerCase().includes(lowercaseQuery)
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, productList.products]);

  return (
    <div>
      <Container>
        <Row className="g-3">
          <Col md={3}>
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle variant="secondary" id="categories-dropdown">
                {selectedCategory || "Select Category"}
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
                {categories.map((category) => (
                  <Dropdown.Item
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                  >
                    {category}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            <Row className="g-3">
              {filteredProducts
                .slice(
                  (currentPage - 1) * productsPerPage,
                  currentPage * productsPerPage
                )
                .map((product) => (
                  <Col key={product.id} md={3}>
                    <Card style={cardStyle}>
                      <Card.Img
                        variant="top"
                        src={product.thumbnail}
                        height={130}
                        width={180}
                        alt={product.title}
                      />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>Price: ${product.price}</Card.Text>
                        <StarRating rating={Math.round(product.rating)} />
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
            <div className="d-flex justify-content-end mt-3">
              <Pagination>
                {Array.from(
                  {
                    length: Math.ceil(
                      filteredProducts.length / productsPerPage
                    ),
                  },
                  (_, i) => (
                    <Pagination.Item
                      key={i + 1}
                      active={i + 1 === currentPage}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </Pagination.Item>
                  )
                )}
              </Pagination>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
