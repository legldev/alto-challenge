import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Card, Row, Col } from "react-bootstrap";
import PostEditor from "../molecules/PostEditor";
import {
  readFromLocalStorage,
  saveToLocalStorage,
  getPostById,
} from "../../helpers/localStorage";

const PostsList = () => {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postEdit, setPostEdit] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [showEditButton, setShowEditButton] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  const handleCloseModal = () => {
    setEditMode(false);
    setPostEdit({});
    setShowModal(false);
  };

  const handleHideEditButton = () => {
    setShowEditButton(null);
  };

  const getPosts = () => {
    const postsKey = "blogPosts";
    const savedPosts = readFromLocalStorage(postsKey);
    setPosts(savedPosts);
  };

  const handleAddPost = () => {
    setShowModal(true);
  };

  const handleSubmit = (e, title, content) => {
    handleCloseModal();
    e.preventDefault();

    const posts = readFromLocalStorage("blogPosts");
    const newPost = {
      id: posts.length + 1,
      title,
      content,
    };
    saveToLocalStorage("blogPosts", [...posts, newPost]);
    getPosts();
  };

  const handleShowEditButton = (postId) => {
    setShowEditButton(postId);
  };

  const handleDeletePost = (postId) => {
    const deletedPost = readFromLocalStorage("blogPosts").filter(
      (post) => post.id !== postId
    );
    saveToLocalStorage("blogPosts", deletedPost);
    getPosts();
  };

  const handleEditPost = (postId) => {
    const post = getPostById(postId);
    setPostEdit(post);
    setEditMode(true);
    setShowModal(true);
  };

  const handleEditSubmit = (e, postId, title, content) => {
    e.preventDefault();

    const posts = readFromLocalStorage("blogPosts");
    const updatedPosts = posts.map((post) => {
      if (post.id == postId) {
        return { ...post, title, content };
      }
      return post;
    });
    saveToLocalStorage("blogPosts", updatedPosts);
    setEditMode(false);
    setPostEdit({});
    getPosts();
    handleCloseModal();
  };

  return (
    <div className="posts-list">
      <h2>Posts</h2>
      <Button onClick={handleAddPost}>Add Post</Button>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <Row style={{ marginTop: "2rem" }}>
          {posts.map((post) => (
            <Col sm={6} md={4} lg={3} key={post.id} className="mb-4">
              <Card
                onMouseEnter={() => handleShowEditButton(post.id)}
                onMouseLeave={handleHideEditButton}
              >
                <Card.Body>
                  <Link to={`/post/${post.id}`}>
                    <Card.Title>{post.title}</Card.Title>
                  </Link>
                  {showEditButton === post.id && (
                    <>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleEditPost(post.id)}
                        style={{ marginRight: "1rem" }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editMode ? "Edit Post" : "Create New Post"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostEditor
            handleSubmit={handleSubmit}
            handleEditSubmit={handleEditSubmit}
            post={postEdit}
            editMode={editMode}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PostsList;
