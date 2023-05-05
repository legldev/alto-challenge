import React from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../helpers/localStorage";
import { Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const PostPage = () => {
  let { postId } = useParams();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (postId !== undefined) {
      const post = getPostById(postId);
      setPost(post);
    }
  }, [postId]);

  return (
    <Container style={{ paddingTop: "2rem" }}>
      <Button variant="primary" href="/blog" style={{ marginBottom: "2rem" }}>
        Back to Blog
      </Button>
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </Container>
  );
};

export default PostPage;
