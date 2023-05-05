const PostView = ({ post }) => {
  if (!post) {
    return <div>Please select a post to read.</div>;
  }

  return (
    <div className="post-view">
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostView;
