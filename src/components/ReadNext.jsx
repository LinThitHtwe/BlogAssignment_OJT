import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { articles } from "../data/articles";

const ReadNext = () => {
  return (
    <Container className="read-next-article-container">
      <Row className="all-article-row">
        {articles.slice(0, 6).map((article, index) => (
          <Col key={index} md={4}>
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

export default ReadNext;
