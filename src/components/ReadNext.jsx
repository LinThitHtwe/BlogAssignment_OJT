import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { articles } from "../data/articles";
import useFetchData from "hooks/useFetchData";
import { getAllBlogs } from "api/APIs";

const ReadNext = () => {
  const { data } = useFetchData(["blogs", "readmore"], () =>
    getAllBlogs("size=1&limit=6")
  );
  if (data) console.log(data.data.content);
  return (
    <Container className="read-next-article-container">
      <Row className="all-article-row">
        {data &&
          data.data.content.map((blog) => (
            <Col key={blog._id} md={4}>
              <div className="all-article-image-container">
                <img
                  src={blog.image}
                  className="img-fluid mx-auto d-block all-article-image"
                  alt="Responsive image"
                />
                <p className="all-article-title">{blog.title}</p>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ReadNext;
