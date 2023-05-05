import { useState } from "react";

import { Button } from "react-bootstrap";

const PostEditor = ({ post, handleSubmit, handleEditSubmit, editMode }) => {
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  const addPost = (e) => {
    handleSubmit(e, title, content);
    setTitle("");
    setContent("");
  };

  const editPost = (e) => {
    handleEditSubmit(e, post.id, title, content);
    setTitle("");
    setContent("");
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
      <Button variant="primary" type="submit" style={{ marginTop: "1rem" }}>
        Save
      </Button>
    </form>
  );
};

export default PostEditor;
