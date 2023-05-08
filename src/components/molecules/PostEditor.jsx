import { useState } from "react";
import { Button } from "react-bootstrap";

const PostEditor = ({ post, handleSubmit, handleEditSubmit, editMode }) => {
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");
  const [formError, setFormError] = useState(false);

  const addPost = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setFormError(true);
      return;
    }
    handleSubmit(e, title, content);
    setTitle("");
    setContent("");
    setFormError(false);
  };

  const editPost = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setFormError(true);
      return;
    }
    handleEditSubmit(e, post.id, title, content);
    setTitle("");
    setContent("");
    setFormError(false);
  };

  return (
    <form className="post-editor" onSubmit={editMode ? editPost : addPost}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content">Content:</label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
      />
      {formError && (
        <p style={{ color: "red" }}>Please fill in all required fields</p>
      )}
      <Button variant="primary" type="submit" style={{ marginTop: "1rem" }}>
        Save
      </Button>
    </form>
  );
};

export default PostEditor;
