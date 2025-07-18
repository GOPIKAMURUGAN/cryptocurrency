import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blog post data from a local JSON file in public/data
    axios
      .get("/data/blogPosts.json")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="my-5"  style={{ paddingTop: "100px" }}>
      <h2 className="mb-4 text-center">📚 Crypto Blog</h2>
      <Row>
        {posts.map((post) => (
          <Col md={4} key={post.slug} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.summary}</Card.Text>
                <Button
                  variant="secondary"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;