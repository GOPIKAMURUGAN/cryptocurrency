import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button } from "react-bootstrap";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("/data/blogPosts.json")
      .then((res) => {
        const foundPost = res.data.find((p) => p.slug === slug);
        setPost(foundPost);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  if (!post) {
    return (
      <Container className="my-5">
        <h4>Loading...</h4>
      </Container>
    );
  }

  return (
    <Container className="my-5" style={{ paddingTop: "100px" }}>
      <Button
        variant="secondary"
        onClick={() => navigate("/blog")}
        className="mb-4"
      >
        ← Back to Blog
      </Button>

      <h2>{post.title}</h2>
      <p><small>{post.date}</small></p>
      <img
        src={post.image}
        alt={post.title}
        className="img-fluid rounded shadow-sm mb-4"
      />
      <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>{post.content}</p>
    </Container>
  );
};

export default BlogPost;