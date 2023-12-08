import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { articles } from "../data/articles";
const AllArticles = () => {
  return (
    <Container className="all-article-container">
      {articles.map((article, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 && (
            <Row key={index} className="all-article-row">
              {[index, index + 1].map(
                (i) =>
                  i < articles.length && (
                    <Col key={i} md={6}>
                      <div className="all-article-image-container">
                        <img
                          src={articles[i].image}
                          className="img-fluid mx-auto d-block all-article-image"
                          alt="Responsive image"
                        />
                        <p className="all-article-title">{articles[i].title}</p>
                      </div>
                    </Col>
                  )
              )}
            </Row>
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default AllArticles;
