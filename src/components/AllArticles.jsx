import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { articles } from "../data/articles";
import { allBlogs } from "api/APIs";
import useFetchData from "hooks/useFetchData";
const AllArticles = () => {
  return (
    <Container className="all-article-container">
      <Row className="all-article-row">
        {articles.map((article, index) => (
          <Col key={index} md={6}>
            <div className="all-article-image-container">
              <img
                src={article.image}
                className="img-fluid mx-auto d-block all-article-image"
                alt="Responsive image"
              />
              <p className="all-article-title">{article.title}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllArticles;
